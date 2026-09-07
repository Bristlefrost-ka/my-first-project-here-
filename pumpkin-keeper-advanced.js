/**
 * ====== THE PUMPKIN KEEPER - ADVANCED GAMEPLAY SYSTEMS ======
 * Enhanced player movement, planting mechanics, and inventory management
 * 
 * Features:
 * - Smooth accelerated movement with friction
 * - Advanced planting system with visual feedback
 * - Tile-based farm grid
 * - Inventory & resource management
 * - Animation & state management
 * - Particle effects ready
 */

class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    
    multiply(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
    
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    
    normalize() {
        const mag = this.magnitude();
        if (mag === 0) return new Vector2(0, 0);
        return new Vector2(this.x / mag, this.y / mag);
    }
    
    distance(other) {
        return new Vector2(other.x - this.x, other.y - this.y).magnitude();
    }
}

/**
 * PLAYER CLASS - Advanced movement system
 */
class Player {
    constructor(x, y, canvasWidth, canvasHeight) {
        this.pos = new Vector2(x, y);
        this.vel = new Vector2(0, 0);
        this.accel = new Vector2(0, 0);
        
        this.width = 30;
        this.height = 40;
        this.maxSpeed = 4;
        this.acceleration = 0.5;
        this.friction = 0.85;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        // Animation state
        this.animationFrame = 0;
        this.facing = 'down'; // up, down, left, right
        this.isMoving = false;
        
        // Interaction range
        this.interactionRange = 50;
        
        // Input tracking
        this.inputKeys = {
            up: false,
            down: false,
            left: false,
            right: false,
            plant: false
        };
    }
    
    setInput(key, isPressed) {
        this.inputKeys[key] = isPressed;
    }
    
    update() {
        // Calculate input direction
        let inputDir = new Vector2(0, 0);
        
        if (this.inputKeys.up) inputDir.y -= 1;
        if (this.inputKeys.down) inputDir.y += 1;
        if (this.inputKeys.left) inputDir.x -= 1;
        if (this.inputKeys.right) inputDir.x += 1;
        
        // Normalize diagonal movement
        if (inputDir.magnitude() > 0) {
            inputDir = inputDir.normalize();
            this.isMoving = true;
            
            // Update facing direction
            if (Math.abs(inputDir.x) > Math.abs(inputDir.y)) {
                this.facing = inputDir.x > 0 ? 'right' : 'left';
            } else {
                this.facing = inputDir.y > 0 ? 'down' : 'up';
            }
        } else {
            this.isMoving = false;
        }
        
        // Apply acceleration
        this.accel = inputDir.multiply(this.acceleration);
        this.vel = this.vel.add(this.accel);
        
        // Cap velocity
        if (this.vel.magnitude() > this.maxSpeed) {
            this.vel = this.vel.normalize().multiply(this.maxSpeed);
        }
        
        // Apply friction
        this.vel = this.vel.multiply(this.friction);
        
        // Update position
        this.pos = this.pos.add(this.vel);
        
        // Boundary collision
        this.pos.x = Math.max(this.width / 2, Math.min(this.canvasWidth - this.width / 2, this.pos.x));
        this.pos.y = Math.max(this.height / 2, Math.min(this.canvasHeight - this.height / 2, this.pos.y));
        
        // Update animation
        if (this.isMoving) {
            this.animationFrame = (this.animationFrame + 0.1) % 4;
        } else {
            this.animationFrame = 0;
        }
    }
    
    getInteractionPoint() {
        const range = 30;
        const offsets = {
            up: new Vector2(0, -range),
            down: new Vector2(0, range),
            left: new Vector2(-range, 0),
            right: new Vector2(range, 0)
        };
        return this.pos.add(offsets[this.facing]);
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        
        // Draw body
        ctx.fillStyle = '#FF8C42';
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        // Draw face direction indicator
        ctx.fillStyle = '#FFFFFF';
        const faceOffsets = {
            up: { x: 0, y: -12 },
            down: { x: 0, y: 12 },
            left: { x: -12, y: 0 },
            right: { x: 12, y: 0 }
        };
        const offset = faceOffsets[this.facing];
        ctx.fillRect(offset.x - 4, offset.y - 4, 8, 8);
        
        // Draw interaction range when near something
        ctx.strokeStyle = 'rgba(255, 200, 0, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, this.interactionRange, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }
}

/**
 * FARM PLOT CLASS - Individual plantable tile
 */
class FarmPlot {
    constructor(x, y, size = 40) {
        this.pos = new Vector2(x, y);
        this.size = size;
        this.crop = null; // Will hold crop data
        this.tilled = false;
        this.moisture = 0.5; // 0-1
        this.health = 100;
        
        // Visual state
        this.isHighlighted = false;
        this.plantingProgress = 0; // 0-1 for animation
    }
    
    contains(point) {
        return (
            point.x >= this.pos.x - this.size / 2 &&
            point.x <= this.pos.x + this.size / 2 &&
            point.y >= this.pos.y - this.size / 2 &&
            point.y <= this.pos.y + this.size / 2
        );
    }
    
    plant(cropType) {
        if (this.tilled && !this.crop) {
            this.crop = {
                type: cropType,
                stage: 0, // 0-4: seed, sprout, pumpkin, glowing, blessed
                age: 0,
                maxAge: 300, // frames to mature
                lastWatered: 0
            };
            this.plantingProgress = 1;
            return true;
        }
        return false;
    }
    
    harvest() {
        if (this.crop && this.crop.stage >= 2) {
            const reward = {
                coins: 10 + (this.crop.stage * 5),
                seeds: 3 + Math.floor(this.crop.stage / 2)
            };
            this.crop = null;
            this.health = 100;
            return reward;
        }
        return null;
    }
    
    update() {
        if (this.crop) {
            this.crop.age++;
            
            // Crop growth progression
            if (this.crop.age % 75 === 0) {
                this.crop.stage = Math.min(4, Math.floor(this.crop.age / 75));
            }
        }
        
        // Fade planting progress
        this.plantingProgress = Math.max(0, this.plantingProgress - 0.05);
    }
    
    draw(ctx) {
        ctx.save();
        
        // Draw soil/plot
        ctx.fillStyle = this.isHighlighted ? '#8B4513' : '#A0522D';
        ctx.fillRect(
            this.pos.x - this.size / 2,
            this.pos.y - this.size / 2,
            this.size,
            this.size
        );
        
        // Draw border
        ctx.strokeStyle = this.isHighlighted ? '#FFD700' : '#654321';
        ctx.lineWidth = 2;
        ctx.strokeRect(
            this.pos.x - this.size / 2,
            this.pos.y - this.size / 2,
            this.size,
            this.size
        );
        
        // Draw crop if present
        if (this.crop) {
            this.drawCrop(ctx);
        }
        
        // Draw planting effect
        if (this.plantingProgress > 0) {
            ctx.fillStyle = `rgba(255, 215, 0, ${this.plantingProgress * 0.5})`;
            ctx.beginPath();
            ctx.arc(
                this.pos.x,
                this.pos.y,
                this.size / 2 + this.plantingProgress * 10,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    drawCrop(ctx) {
        const stages = ['🌱', '🌿', '🎃', '✨🎃', '⭐🎃'];
        const colors = ['#228B22', '#32CD32', '#FF8C00', '#FFD700', '#FF69B4'];
        
        ctx.fillStyle = colors[this.crop.stage];
        ctx.font = `${this.size * 0.6}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(stages[this.crop.stage], this.pos.x, this.pos.y);
        
        // Growth progress bar
        const barWidth = this.size - 4;
        const progress = this.crop.age / this.crop.maxAge;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(
            this.pos.x - barWidth / 2,
            this.pos.y + this.size / 2 + 2,
            barWidth,
            3
        );
        
        ctx.fillStyle = '#32CD32';
        ctx.fillRect(
            this.pos.x - barWidth / 2,
            this.pos.y + this.size / 2 + 2,
            barWidth * progress,
            3
        );
    }
}

/**
 * FARM MANAGER CLASS - Grid-based farm system
 */
class FarmManager {
    constructor(gridWidth, gridHeight, tileSize = 40, offsetX = 50, offsetY = 50) {
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.tileSize = tileSize;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        // Create grid of plots
        this.plots = [];
        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                const plot = new FarmPlot(
                    offsetX + x * tileSize + tileSize / 2,
                    offsetY + y * tileSize + tileSize / 2,
                    tileSize - 2
                );
                plot.tilled = true; // All plots start tilled
                this.plots.push(plot);
            }
        }
    }
    
    getPlotAtPosition(pos) {
        return this.plots.find(plot => plot.contains(pos));
    }
    
    getNearbyPlots(pos, range) {
        return this.plots.filter(plot => 
            pos.distance(plot.pos) <= range
        );
    }
    
    update() {
        this.plots.forEach(plot => plot.update());
    }
    
    draw(ctx) {
        this.plots.forEach(plot => plot.draw(ctx));
    }
}

/**
 * INVENTORY CLASS - Resource management
 */
class Inventory {
    constructor() {
        this.seeds = 10;
        this.coins = 50;
        this.maxSeeds = 50;
    }
    
    addSeeds(amount) {
        this.seeds = Math.min(this.maxSeeds, this.seeds + amount);
    }
    
    useSeeds(amount = 1) {
        if (this.seeds >= amount) {
            this.seeds -= amount;
            return true;
        }
        return false;
    }
    
    addCoins(amount) {
        this.coins += amount;
    }
    
    draw(ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        
        ctx.fillText(`🌱 Seeds: ${this.seeds}`, 20, 30);
        ctx.fillText(`🪙 Coins: ${this.coins}`, 20, 60);
    }
}

/**
 * PLANTING SYSTEM - Advanced planting with feedback
 */
class PlantingSystem {
    constructor(player, farm, inventory) {
        this.player = player;
        this.farm = farm;
        this.inventory = inventory;
        
        this.isPlanting = false;
        this.plantingCooldown = 0;
        this.plantingDuration = 15; // frames
        this.plantingPreview = null;
    }
    
    update() {
        if (this.plantingCooldown > 0) {
            this.plantingCooldown--;
        }
        
        // Update planting preview
        if (this.player.inputKeys.plant) {
            const interactionPoint = this.player.getInteractionPoint();
            const nearbyPlots = this.farm.getNearbyPlots(interactionPoint, 50);
            
            if (nearbyPlots.length > 0) {
                // Highlight nearest plot
                this.farm.plots.forEach(p => p.isHighlighted = false);
                
                const nearest = nearbyPlots.reduce((a, b) =>
                    interactionPoint.distance(a.pos) < interactionPoint.distance(b.pos) ? a : b
                );
                
                nearest.isHighlighted = true;
                
                // Plant if spacebar pressed (would be actual input in real game)
                if (this.plantingCooldown === 0 && this.inventory.useSeeds()) {
                    if (nearest.plant('pumpkin')) {
                        this.plantingCooldown = 30;
                    } else {
                        this.inventory.addSeeds(1); // Refund
                    }
                }
            }
        } else {
            this.farm.plots.forEach(p => p.isHighlighted = false);
        }
    }
    
    draw(ctx) {
        // Draw planting indicator when holding E
        if (this.player.inputKeys.plant) {
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(this.player.pos.x, this.player.pos.y, 50, 0, Math.PI * 2);
            ctx.stroke();
            
            // Draw "E to Plant" text
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('PLANTING...', this.player.pos.x, this.player.pos.y - 70);
        }
    }
}

/**
 * GAME CONTROLLER - Ties everything together
 */
class PumpkinKeeperGame {
    constructor(canvasWidth = 800, canvasHeight = 600) {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = canvasWidth;
        this.height = canvasHeight;
        
        // Initialize systems
        this.player = new Player(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
        this.farm = new FarmManager(6, 5, 50, 80, 80);
        this.inventory = new Inventory();
        this.plantingSystem = new PlantingSystem(this.player, this.farm, this.inventory);
        
        // Setup input
        this.setupInput();
        
        // Game loop
        this.animate();
    }
    
    setupInput() {
        const keyMap = {
            'w': 'up', 'ArrowUp': 'up',
            's': 'down', 'ArrowDown': 'down',
            'a': 'left', 'ArrowLeft': 'left',
            'd': 'right', 'ArrowRight': 'right',
            'e': 'plant'
        };
        
        window.addEventListener('keydown', (e) => {
            const action = keyMap[e.key.toLowerCase()];
            if (action) {
                this.player.setInput(action, true);
                e.preventDefault();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            const action = keyMap[e.key.toLowerCase()];
            if (action) {
                this.player.setInput(action, false);
                e.preventDefault();
            }
        });
    }
    
    update() {
        this.player.update();
        this.farm.update();
        this.plantingSystem.update();
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#2D5016';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw farm
        this.farm.draw(this.ctx);
        
        // Draw player
        this.player.draw(this.ctx);
        
        // Draw UI
        this.inventory.draw(this.ctx);
        this.plantingSystem.draw(this.ctx);
        
        // Draw controls info
        this.drawControls();
    }
    
    drawControls() {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'right';
        
        const controls = [
            'WASD / Arrows - Move',
            'E - Hold to Plant',
            'Space - Harvest (near crop)'
        ];
        
        controls.forEach((control, i) => {
            this.ctx.fillText(control, this.width - 20, this.height - 80 + (i * 20));
        });
    }
    
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize game when page loads
window.addEventListener('DOMContentLoaded', () => {
    new PumpkinKeeperGame();
});
