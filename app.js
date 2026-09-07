    
        function toggleMenu() {
            document.getElementById('sidebar-menu').classList.toggle('open');
            document.getElementById('menu-shade').classList.toggle('open');
        }
        
        function goToPage (targetId) {
            let allPages = document.querySelectorAll('.page');
            
            for (let i = 0; i < allPages.length; i++) {
            
                allPages[i].classList.remove('active');
            
                
            }
            
            document.getElementById(targetId).classList.add('active');
            
            document.getElementById('sidebar-menu').classList.remove('open');
            
            document.getElementById('menu-shade').classList.remove('open');
            
        }
        
        function toggleFaq (headerElement) {
            
            let parentCard = headerElement.parentElement;
            
            parentCard.classList.toggle('open');
            
        }
        
        // Credit to Duke for using Claude to debug+make it so it auto copy/pastes
        function generateAndCopyApp() {
        
            let name = document.getElementById('form-name').value.trim();
            
            let hours = document.getElementById('form-experience').value;
            
            let link = document.getElementById('form-link').value.trim();
            
            let bio = document.getElementById('form-bio').value.trim();
        
            if (name === "" || link === "" || bio === "") {
                alert("Please complete all form fields before processing your submission text block!");
                return;
            }
        
            let formattedText = "{" + name + ", " + hours + ", " + link + ", " + bio + "}";
        
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(formattedText).then(function() {
                    showCopySuccess();
                }).catch(function() {
                    tryLegacyCopy(formattedText);
                });
            } else {
                tryLegacyCopy(formattedText);
            }
        }
        
        function tryLegacyCopy(text) {
            let tempArea = document.createElement('textarea');
            tempArea.value = text;
            tempArea.style.position = 'fixed';
            tempArea.style.opacity = '0';
            document.body.appendChild(tempArea);
            tempArea.focus();
            tempArea.select();
        
            let success = false;
            try {
                success = document.execCommand('copy');
            } catch (err) {
                success = false;
            }
        
            document.body.removeChild(tempArea);
        
            if (success) {
                showCopySuccess();
            } else {
                window.prompt("Auto-copy is blocked here — press Ctrl+C (Cmd+C on Mac) to copy:", text);
            }
        }
        
        function showCopySuccess() {
            let msg = document.getElementById('copy-success-msg');
            msg.style.display = 'block';
            setTimeout(function() {
                msg.style.display = 'none';
            }, 5000);
        }