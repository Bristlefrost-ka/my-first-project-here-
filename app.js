		function program() {
		   
			// Quite possibly KCL or Khantober or either or
			
			
			
			/**====----[SETUP]----====**/
			// [
			
			//credit to @dkareh
			(function(){return this;})().LoopProtector.prototype.leave = function(){};
			
			// Create the size of teh program to smothen everything out
			size(600, 600);
		    title("WIP (what does that mean)");

			
			// Play it how you are supposed to by setting framerate
			frameRate(60);
			smooth();
			
			// Styling settings for the program
			textAlign(CENTER, CENTER);
			noStroke();
			rectMode(CENTER);
			imageMode(CENTER);
			
			//]
			
			/**====----[IMAGES]----====**/
			// [
			
			var imgs = {
			
			    dirtMound: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {

                        // dark dirt layer
                        noStroke();
                        fill(96, 56, 56);
                        beginShape();
                        vertex(18, 114);
                        bezierVertex(18, 114, 22, 114, 25, 111);
                        bezierVertex(25, 111, 28, 109, 34, 109);
                        bezierVertex(34, 109, 37, 109, 43, 103);
                        bezierVertex(43, 103, 45, 101, 50, 98);
                        bezierVertex(50, 98, 67, 99, 95, 83);
                        bezierVertex(95, 83, 111, 67, 111, 67);
                        bezierVertex(121, 67, 122, 60, 122, 60);
                        bezierVertex(124, 52, 127, 47, 127, 47);
                        bezierVertex(129, 43, 132, 35, 132, 35);
                        bezierVertex(148, 46, 152, 22, 152, 22);
                        bezierVertex(157, 22, 162, 24, 162, 24);
                        bezierVertex(167, 25, 171, 22, 171, 22);
                        bezierVertex(179, 19, 184, 17, 184, 17);
                        bezierVertex(197, 19, 222, 47, 222, 47);
                        bezierVertex(231, 54, 237, 56, 237, 56);
                        bezierVertex(249, 71, 260, 79, 260, 79);
                        bezierVertex(266, 90, 272, 92, 272, 92);
                        bezierVertex(275, 92, 277, 95, 277, 95);
                        bezierVertex(292, 108, 293, 108, 293, 108);
                        bezierVertex(306, 118, 314, 121, 314, 121);
                        bezierVertex(316, 124, 310, 123, 310, 123);
                        bezierVertex(304, 125, 299, 127, 286, 127);
                        bezierVertex(286, 127, 282, 127, 269, 131);
                        bezierVertex(269, 131, 256, 145, 237, 132);
                        bezierVertex(237, 132, 234, 130, 228, 129);
                        bezierVertex(228, 129, 218, 114, 210, 120);
                        bezierVertex(210, 120, 199, 126, 187, 122);
                        bezierVertex(187, 122, 181, 119, 175, 125);
                        bezierVertex(175, 125, 170, 130, 165, 129);
                        bezierVertex(165, 129, 160, 131, 152, 131);
                        bezierVertex(152, 131, 149, 129, 144, 125);
                        bezierVertex(144, 125, 140, 121, 131, 124);
                        bezierVertex(131, 124, 126, 123, 120, 122);
                        bezierVertex(120, 122, 112, 117, 105, 122);
                        bezierVertex(105, 122, 97, 133, 85, 129);
                        bezierVertex(85, 129, 79, 126, 77, 122);
                        bezierVertex(77, 122, 75, 119, 69, 121);
                        bezierVertex(69, 121, 59, 123, 44, 120);
                        bezierVertex(44, 120, 39, 115, 28, 116);
                        bezierVertex(28, 116, 23, 116, 18, 114);
                        endShape();
                        
                        // lighter dirt layer
                        fill(127, 84, 68);
                        beginShape();
                        vertex(77, 103);
                        bezierVertex(77, 103, 70, 115, 62, 116);
                        bezierVertex(62, 116, 38, 109, 45, 103);
                        bezierVertex(45, 103, 49, 98, 54, 92);
                        bezierVertex(54, 92, 61, 79, 71, 73);
                        bezierVertex(71, 73, 78, 68, 85, 72);
                        bezierVertex(85, 72, 95, 78, 101, 72);
                        bezierVertex(101, 72, 107, 67, 112, 68);
                        bezierVertex(112, 68, 123, 70, 123, 67);
                        bezierVertex(123, 67, 128, 64, 134, 60);
                        bezierVertex(141, 55, 132, 57, 132, 57);
                        bezierVertex(129, 58, 129, 51, 129, 51);
                        bezierVertex(132, 46, 132, 35, 132, 35);
                        bezierVertex(146, 21, 152, 22, 152, 22);
                        bezierVertex(157, 23, 160, 30, 160, 30);
                        bezierVertex(161, 34, 170, 36, 170, 36);
                        bezierVertex(176, 37, 179, 35, 179, 35);
                        bezierVertex(182, 34, 175, 33, 175, 33);
                        bezierVertex(168, 33, 172, 26, 172, 26);
                        bezierVertex(174, 23, 186, 17, 186, 17);
                        bezierVertex(194, 14, 201, 21, 207, 23);
                        bezierVertex(207, 23, 218, 27, 218, 36);
                        bezierVertex(218, 36, 219, 45, 223, 48);
                        bezierVertex(223, 48, 221, 49, 225, 53);
                        bezierVertex(225, 53, 231, 56, 232, 59);
                        bezierVertex(232, 59, 232, 67, 235, 69);
                        bezierVertex(235, 69, 236, 76, 239, 81);
                        bezierVertex(239, 81, 241, 82, 238, 72);
                        bezierVertex(238, 72, 238, 68, 236, 67);
                        bezierVertex(236, 67, 236, 62, 236, 55);
                        bezierVertex(236, 55, 251, 59, 252, 63);
                        bezierVertex(252, 63, 260, 79, 263, 87);
                        bezierVertex(263, 87, 261, 95, 266, 95);
                        bezierVertex(266, 95, 268, 95, 270, 99);
                        bezierVertex(270, 99, 272, 101, 275, 100);
                        bezierVertex(275, 100, 277, 104, 282, 108);
                        bezierVertex(282, 107, 281, 105, 281, 105);
                        bezierVertex(277, 102, 276, 97, 276, 97);
                        bezierVertex(275, 97, 275, 92, 275, 92);
                        bezierVertex(285, 96, 290, 102, 290, 102);
                        bezierVertex(292, 109, 297, 115, 297, 115);
                        bezierVertex(303, 119, 297, 119, 297, 119);
                        bezierVertex(291, 119, 288, 121, 288, 121);
                        bezierVertex(282, 112, 273, 105, 273, 105);
                        bezierVertex(266, 103, 255, 103, 255, 103);
                        bezierVertex(252, 101, 251, 97, 251, 97);
                        bezierVertex(244, 92, 243, 89, 243, 89);
                        bezierVertex(238, 87, 236, 83, 236, 83);
                        bezierVertex(234, 77, 234, 72, 234, 72);
                        bezierVertex(232, 67, 226, 67, 226, 67);
                        bezierVertex(225, 66, 220, 59, 220, 59);
                        bezierVertex(215, 55, 214, 55, 214, 55);
                        bezierVertex(208, 40, 202, 39, 202, 39);
                        bezierVertex(197, 34, 184, 38, 184, 38);
                        bezierVertex(173, 43, 168, 40, 168, 40);
                        bezierVertex(164, 37, 155, 43, 155, 43);
                        bezierVertex(145, 53, 139, 63, 139, 63);
                        bezierVertex(136, 65, 133, 67, 133, 67);
                        bezierVertex(130, 65, 125, 73, 125, 73);
                        bezierVertex(119, 85, 114, 87, 114, 87);
                        bezierVertex(110, 86, 102, 85, 102, 85);
                        bezierVertex(91, 83, 83, 97, 83, 97);
                        bezierVertex(84, 99, 86, 96, 86, 96);
                        bezierVertex(93, 90, 98, 91, 98, 91);
                        bezierVertex(108, 94, 116, 93, 116, 93);
                        bezierVertex(122, 89, 130, 83, 132, 85);
                        bezierVertex(132, 85, 136, 87, 141, 91);
                        bezierVertex(141, 91, 154, 93, 155, 95);
                        bezierVertex(155, 95, 163, 100, 166, 104);
                        bezierVertex(166, 104, 182, 110, 190, 111);
                        bezierVertex(190, 111, 195, 110, 205, 105);
                        bezierVertex(205, 105, 193, 106, 190, 105);
                        bezierVertex(190, 105, 180, 96, 175, 91);
                        bezierVertex(175, 91, 163, 89, 160, 80);
                        bezierVertex(160, 80, 159, 73, 153, 72);
                        bezierVertex(153, 72, 148, 70, 150, 63);
                        bezierVertex(150, 63, 154, 61, 158, 52);
                        bezierVertex(158, 52, 165, 45, 169, 47);
                        bezierVertex(169, 47, 178, 48, 188, 41);
                        bezierVertex(188, 41, 194, 38, 199, 43);
                        bezierVertex(199, 43, 203, 51, 204, 57);
                        bezierVertex(204, 57, 215, 69, 221, 71);
                        bezierVertex(221, 71, 232, 70, 230, 75);
                        bezierVertex(230, 75, 236, 96, 246, 99);
                        bezierVertex(247, 99, 248, 98, 248, 105);
                        bezierVertex(248, 105, 252, 105, 256, 110);
                        bezierVertex(256, 110, 267, 110, 272, 115);
                        bezierVertex(272, 115, 282, 115, 277, 119);
                        bezierVertex(277, 119, 268, 121, 259, 129);
                        bezierVertex(259, 129, 256, 131, 249, 129);
                        bezierVertex(249, 129, 238, 126, 235, 126);
                        bezierVertex(235, 126, 232, 124, 223, 113);
                        bezierVertex(223, 113, 228, 113, 232, 108);
                        bezierVertex(233, 109, 238, 110, 244, 114);
                        bezierVertex(244, 114, 251, 115, 254, 120);
                        bezierVertex(254, 120, 258, 120, 262, 120);
                        bezierVertex(262, 120, 254, 115, 251, 113);
                        bezierVertex(251, 113, 245, 112, 243, 109);
                        bezierVertex(243, 109, 241, 108, 238, 105);
                        bezierVertex(238, 105, 230, 101, 222, 106);
                        bezierVertex(222, 106, 208, 112, 205, 111);
                        bezierVertex(205, 111, 199, 115, 184, 115);
                        bezierVertex(184, 115, 171, 122, 163, 120);
                        bezierVertex(163, 120, 164, 117, 167, 116);
                        bezierVertex(167, 116, 162, 115, 158, 121);
                        bezierVertex(158, 121, 153, 123, 147, 121);
                        bezierVertex(147, 121, 144, 115, 130, 114);
                        bezierVertex(130, 114, 116, 113, 110, 113);
                        bezierVertex(110, 113, 105, 107, 101, 112);
                        bezierVertex(101, 112, 107, 112, 107, 114);
                        bezierVertex(107, 114, 108, 120, 94, 123);
                        bezierVertex(94, 123, 89, 123, 81, 118);
                        bezierVertex(81, 118, 76, 115, 75, 114);
                        bezierVertex(75, 114, 76, 110, 77, 107);
                        bezierVertex(77, 107, 78, 105, 76, 104);
                        endShape();
                        
                        // Lightest dirt layer
                        fill(164, 114, 99);
                        beginShape();
                        vertex(62, 90);
                        bezierVertex(62, 90, 67, 81, 74, 77);
                        bezierVertex(74, 77, 77, 76, 82, 78);
                        bezierVertex(82, 78, 89, 82, 82, 82);
                        bezierVertex(82, 82, 73, 81, 68, 87);
                        bezierVertex(64, 89, 63, 90, 63, 90);
                        endShape();
                        
                        beginShape();
                        vertex(89, 101);
                        bezierVertex(89, 101, 94, 91, 104, 96);
                        bezierVertex(104, 96, 110, 98, 112, 97);
                        bezierVertex(112, 97, 105, 101, 99, 98);
                        bezierVertex(99, 98, 93, 96, 90, 101);
                        endShape();
                        
                        beginShape();
                        vertex(116, 97);
                        bezierVertex(116, 97, 117, 100, 123, 97);
                        bezierVertex(123, 97, 120, 96, 115, 97);
                        endShape();
                        
                        beginShape();
                        vertex(139, 36);
                        bezierVertex(139, 36, 142, 28, 152, 27);
                        bezierVertex(152, 27, 152, 30, 148, 30);
                        bezierVertex(148, 30, 143, 32, 140, 36);
                        endShape();
                        
                        beginShape();
                        vertex(191, 52);
                        bezierVertex(191, 52, 182, 43, 174, 49);
                        bezierVertex(174, 49, 170, 53, 160, 56);
                        bezierVertex(160, 56, 160, 59, 170, 59);
                        bezierVertex(170, 59, 175, 58, 178, 55);
                        bezierVertex(178, 55, 182, 53, 190, 53);
                        endShape();
                        
                        beginShape();
                        vertex(179, 25);
                        bezierVertex(179, 25, 201, 18, 208, 28);
                        bezierVertex(208, 28, 214, 33, 212, 39);
                        bezierVertex(212, 39, 215, 44, 214, 47);
                        bezierVertex(212, 39, 209, 39, 209, 39);
                        bezierVertex(202, 37, 202, 32, 202, 32);
                        bezierVertex(194, 27, 181, 26, 181, 26);
                        endShape();
                        
                        beginShape();
                        vertex(220, 49);
                        bezierVertex(220, 49, 214, 45, 220, 54);
                        bezierVertex(220, 54, 228, 59, 228, 56);
                        bezierVertex(228, 56, 225, 55, 220, 49);
                        endShape();
                        
                        beginShape();
                        vertex(239, 65);
                        bezierVertex(239, 65, 245, 62, 250, 70);
                        bezierVertex(250, 70, 245, 68, 239, 65);
                        endShape();
                        
                        beginShape();
                        vertex(237, 113);
                        bezierVertex(237, 113, 229, 111, 236, 115);
                        bezierVertex(236, 115, 239, 116, 244, 120);
                        bezierVertex(244, 120, 249, 124, 243, 116);
                        bezierVertex(243, 116, 241, 114, 237, 112);
                        endShape();
			        },
			    
			    }, 
			    
			    sprout: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {

			            pushMatrix();
			            translate(112, 37);
			            scale(0.7)
			            
			            // stem
                        fill(0, 105, 7);
                        beginShape();
                        vertex(37, 155);
                        bezierVertex(37, 155, 41, 165, 48, 166);
                        bezierVertex(48, 166, 61, 166, 55, 158);
                        bezierVertex(55, 158, 39, 128, 48, 97);
                        bezierVertex(48, 97, 53, 78, 79, 67);
                        bezierVertex(79, 67, 100, 61, 124, 71);
                        bezierVertex(124, 71, 159, 89, 166, 113);
                        bezierVertex(166, 113, 177, 145, 151, 153);
                        bezierVertex(151, 153, 112, 158, 122, 127);
                        bezierVertex(122, 127, 126, 113, 139, 111);
                        bezierVertex(139, 111, 140, 108, 140, 107);
                        bezierVertex(140, 107, 121, 110, 111, 125);
                        bezierVertex(111, 125, 97, 152, 131, 163);
                        bezierVertex(131, 163, 172, 176, 181, 133);
                        bezierVertex(181, 133, 185, 93, 135, 63);
                        bezierVertex(135, 63, 100, 44, 64, 61);
                        bezierVertex(64, 61, 30, 77, 30, 125);
                        bezierVertex(30, 125, 30, 137, 37, 156);
                        endShape();
                        
                        // all leafs
                        fill(0, 171, 11);
                        beginShape();
                        vertex(36, 87);
                        bezierVertex(36, 87, 41, 74, 40, 57);
                        bezierVertex(40, 57, 43, 67, 42, 78);
                        bezierVertex(42, 78, 38, 86, 35, 87);
                        endShape();
                        
                        beginShape();
                        vertex(35, 56);
                        bezierVertex(35, 56, 42, 68, 26, 76);
                        bezierVertex(26, 76, 20, 73, 19, 62);
                        bezierVertex(18, 63, 10, 66, 4, 55);
                        bezierVertex(4, 55, 5, 48, 7, 45);
                        bezierVertex(7, 45, 4, 42, 1, 33);
                        bezierVertex(0, 28, 0, 28, 0, 29);
                        bezierVertex(1, 29, 10, 21, 21, 26);
                        bezierVertex(21, 26, 24, 22, 28, 20);
                        bezierVertex(28, 20, 40, 23, 43, 32);
                        bezierVertex(43, 32, 52, 30, 54, 36);
                        bezierVertex(54, 36, 50, 49, 41, 50);
                        bezierVertex(41, 50, 46, 47, 47, 41);
                        bezierVertex(47, 41, 43, 48, 39, 50);
                        bezierVertex(39, 50, 40, 41, 35, 32);
                        bezierVertex(35, 32, 38, 43, 36, 49);
                        bezierVertex(36, 49, 17, 30, 1, 29);
                        bezierVertex(1, 29, 26, 39, 35, 53);
                        bezierVertex(35, 53, 27, 56, 17, 59);
                        bezierVertex(17, 59, 27, 59, 35, 55);
                        bezierVertex(35, 55, 31, 66, 27, 72);
                        bezierVertex(27, 72, 33, 67, 36, 57);
                        endShape();
                        
                        beginShape();
                        vertex(75, 54);
                        bezierVertex(75, 54, 91, 47, 106, 48);
                        bezierVertex(106, 48, 124, 48, 127, 41);
                        bezierVertex(127, 41, 123, 50, 103, 49);
                        bezierVertex(103, 49, 95, 48, 85, 53);
                        bezierVertex(85, 53, 81, 54, 76, 54);
                        endShape();
                        
                        beginShape();
                        vertex(123, 39);
                        bezierVertex(123, 39, 117, 45, 109, 39);
                        bezierVertex(109, 39, 106, 36, 105, 36);
                        bezierVertex(105, 36, 109, 28, 114, 25);
                        bezierVertex(114, 25, 113, 17, 118, 9);
                        bezierVertex(118, 9, 122, 9, 130, 9);
                        bezierVertex(130, 9, 133, 2, 143, 0);
                        bezierVertex(143, 0, 150, 8, 150, 19);
                        bezierVertex(150, 19, 155, 22, 156, 25);
                        bezierVertex(156, 25, 154, 36, 149, 40);
                        bezierVertex(149, 40, 150, 49, 149, 53);
                        bezierVertex(149, 53, 135, 52, 132, 43);
                        bezierVertex(132, 43, 134, 46, 140, 46);
                        bezierVertex(140, 46, 132, 43, 132, 40);
                        bezierVertex(132, 40, 140, 38, 147, 34);
                        bezierVertex(147, 34, 136, 39, 131, 38);
                        bezierVertex(131, 38, 141, 23, 142, 3);
                        bezierVertex(142, 3, 138, 26, 128, 37);
                        bezierVertex(128, 37, 122, 35, 118, 23);
                        bezierVertex(118, 23, 118, 30, 125, 38);
                        bezierVertex(125, 38, 116, 39, 109, 36);
                        bezierVertex(109, 36, 114, 40, 122, 39);
                        endShape();
                        
                        beginShape();
                        vertex(158, 80);
                        bezierVertex(158, 80, 168, 79, 173, 85);
                        bezierVertex(173, 85, 168, 83, 159, 81);
                        endShape();
                        
                        beginShape();
                        vertex(173, 81);
                        bezierVertex(173, 81, 167, 79, 167, 73);
                        bezierVertex(167, 73, 167, 67, 167, 66);
                        bezierVertex(167, 66, 176, 65, 179, 66);
                        bezierVertex(179, 66, 184, 61, 190, 60);
                        bezierVertex(190, 60, 194, 63, 196, 67);
                        bezierVertex(196, 67, 202, 67, 210, 70);
                        bezierVertex(210, 70, 213, 81, 201, 86);
                        bezierVertex(201, 86, 202, 91, 203, 94);
                        bezierVertex(203, 94, 200, 100, 188, 99);
                        bezierVertex(188, 99, 186, 103, 181, 104);
                        bezierVertex(181, 104, 172, 95, 176, 86);
                        bezierVertex(176, 86, 177, 92, 181, 96);
                        bezierVertex(181, 96, 178, 89, 178, 86);
                        bezierVertex(178, 86, 184, 92, 192, 92);
                        bezierVertex(192, 92, 183, 89, 179, 84);
                        bezierVertex(179, 84, 207, 82, 210, 70);
                        bezierVertex(210, 70, 201, 81, 178, 82);
                        bezierVertex(178, 82, 178, 77, 183, 68);
                        bezierVertex(183, 68, 179, 72, 177, 81);
                        bezierVertex(177, 81, 173, 76, 169, 68);
                        bezierVertex(169, 68, 170, 73, 173, 80);
                        endShape();
                        
                        beginShape();
                        vertex(181, 132);
                        bezierVertex(181, 132, 189, 136, 190, 142);
                        bezierVertex(190, 142, 188, 136, 181, 134);
                        endShape();
                        
                        beginShape();
                        vertex(191, 139);
                        bezierVertex(191, 139, 188, 133, 194, 127);
                        bezierVertex(194, 127, 199, 129, 201, 133);
                        bezierVertex(201, 133, 208, 131, 212, 135);
                        bezierVertex(212, 135, 214, 139, 212, 142);
                        bezierVertex(212, 142, 218, 148, 220, 153);
                        bezierVertex(220, 153, 216, 157, 207, 157);
                        bezierVertex(207, 157, 204, 163, 202, 163);
                        bezierVertex(202, 163, 191, 161, 191, 158);
                        bezierVertex(191, 158, 187, 159, 183, 158);
                        bezierVertex(183, 158, 183, 147, 190, 145);
                        bezierVertex(190, 145, 187, 147, 188, 152);
                        bezierVertex(188, 152, 189, 146, 191, 146);
                        bezierVertex(191, 146, 193, 153, 198, 156);
                        bezierVertex(198, 156, 193, 149, 193, 144);
                        bezierVertex(193, 144, 211, 156, 218, 152);
                        bezierVertex(218, 152, 194, 148, 194, 142);
                        bezierVertex(194, 142, 200, 137, 203, 136);
                        bezierVertex(203, 136, 200, 137, 193, 141);
                        bezierVertex(193, 141, 193, 136, 196, 130);
                        bezierVertex(196, 130, 195, 131, 191, 139);
                        endShape();
                        
                        beginShape();
                        vertex(51, 145);
                        bezierVertex(51, 145, 53, 132, 55, 124);
                        bezierVertex(55, 124, 56, 117, 62, 112);
                        bezierVertex(62, 112, 55, 121, 55, 133);
                        bezierVertex(55, 133, 53, 146, 52, 147);
                        endShape();
                        
                        beginShape();
                        vertex(61, 108);
                        bezierVertex(61, 108, 51, 104, 54, 88);
                        bezierVertex(54, 88, 59, 87, 64, 90);
                        bezierVertex(64, 90, 73, 82, 82, 85);
                        bezierVertex(82, 85, 85, 89, 86, 91);
                        bezierVertex(86, 91, 100, 90, 107, 99);
                        bezierVertex(107, 99, 104, 108, 96, 112);
                        bezierVertex(96, 112, 96, 122, 93, 127);
                        bezierVertex(93, 127, 85, 131, 78, 128);
                        bezierVertex(78, 128, 74, 135, 66, 137);
                        bezierVertex(66, 137, 58, 126, 64, 117);
                        bezierVertex(64, 117, 64, 126, 66, 131);
                        bezierVertex(66, 131, 67, 118, 66, 114);
                        bezierVertex(66, 114, 70, 119, 79, 122);
                        bezierVertex(79, 122, 66, 115, 66, 111);
                        bezierVertex(66, 111, 84, 99, 103, 102);
                        bezierVertex(103, 102, 88, 99, 67, 109);
                        bezierVertex(67, 109, 64, 105, 73, 94);
                        bezierVertex(73, 94, 65, 98, 64, 109);
                        bezierVertex(64, 109, 58, 102, 58, 95);
                        bezierVertex(58, 95, 57, 103, 60, 108);
                        endShape();
                        
                        beginShape();
                        vertex(124, 109);
                        vertex(128, 103);
                        vertex(125, 111);
                        endShape();
                        
                        beginShape();
                        vertex(124, 103);
                        bezierVertex(124, 103, 121, 111, 112, 107);
                        bezierVertex(112, 107, 112, 101, 116, 100);
                        bezierVertex(116, 100, 112, 94, 112, 89);
                        bezierVertex(112, 89, 114, 87, 118, 87);
                        bezierVertex(118, 87, 118, 81, 122, 77);
                        bezierVertex(122, 77, 130, 80, 132, 85);
                        bezierVertex(132, 85, 135, 85, 138, 85);
                        bezierVertex(138, 85, 142, 94, 138, 96);
                        bezierVertex(138, 96, 143, 97, 141, 102);
                        bezierVertex(141, 102, 135, 106, 129, 103);
                        bezierVertex(129, 103, 133, 103, 134, 101);
                        bezierVertex(134, 101, 131, 101, 129, 101);
                        bezierVertex(129, 101, 134, 99, 134, 95);
                        bezierVertex(134, 95, 129, 99, 128, 100);
                        bezierVertex(128, 100, 129, 89, 123, 79);
                        bezierVertex(123, 79, 127, 91, 127, 100);
                        bezierVertex(127, 100, 121, 100, 117, 96);
                        bezierVertex(117, 96, 119, 100, 124, 101);
                        bezierVertex(124, 101, 121, 104, 116, 105);
                        bezierVertex(116, 105, 120, 106, 124, 103);
                        endShape();
                        
                        beginShape();
                        vertex(141, 110);
                        endShape();
                        
                        beginShape();
                        endShape();
                        
                        beginShape();
                        vertex(141, 110);
                        bezierVertex(141, 110, 140, 101, 148, 101);
                        bezierVertex(148, 101, 151, 104, 151, 108);
                        bezierVertex(151, 108, 159, 108, 160, 115);
                        bezierVertex(160, 115, 159, 119, 156, 119);
                        bezierVertex(156, 119, 162, 126, 159, 130);
                        bezierVertex(159, 130, 154, 136, 148, 129);
                        bezierVertex(148, 129, 145, 133, 142, 134);
                        bezierVertex(142, 134, 135, 131, 136, 125);
                        bezierVertex(136, 125, 131, 127, 130, 122);
                        bezierVertex(130, 122, 130, 115, 138, 114);
                        bezierVertex(138, 114, 134, 116, 134, 119);
                        bezierVertex(134, 119, 135, 115, 139, 115);
                        bezierVertex(139, 115, 138, 123, 141, 126);
                        bezierVertex(141, 126, 141, 121, 141, 115);
                        bezierVertex(141, 115, 146, 128, 158, 130);
                        bezierVertex(158, 130, 145, 122, 142, 115);
                        bezierVertex(142, 115, 150, 114, 154, 111);
                        bezierVertex(153, 111, 147, 116, 143, 112);
                        bezierVertex(143, 112, 144, 109, 149, 103);
                        bezierVertex(149, 103, 144, 105, 141, 111);
                        endShape();
                        popMatrix();
			            
			            pushMatrix();
			            translate(0, 140);
			            scale(1, 0.6);
			            
                        // dark dirt layer
                        noStroke();
                        fill(96, 56, 56);
                        beginShape();
                        vertex(18, 114);
                        bezierVertex(18, 114, 22, 114, 25, 111);
                        bezierVertex(25, 111, 28, 109, 34, 109);
                        bezierVertex(34, 109, 37, 109, 43, 103);
                        bezierVertex(43, 103, 45, 101, 50, 98);
                        bezierVertex(50, 98, 67, 99, 95, 83);
                        bezierVertex(95, 83, 111, 67, 111, 67);
                        bezierVertex(121, 67, 122, 60, 122, 60);
                        bezierVertex(124, 52, 127, 47, 127, 47);
                        bezierVertex(129, 43, 132, 35, 132, 35);
                        bezierVertex(148, 46, 152, 22, 152, 22);
                        bezierVertex(157, 22, 162, 24, 162, 24);
                        bezierVertex(167, 25, 171, 22, 171, 22);
                        bezierVertex(179, 19, 184, 17, 184, 17);
                        bezierVertex(197, 19, 222, 47, 222, 47);
                        bezierVertex(231, 54, 237, 56, 237, 56);
                        bezierVertex(249, 71, 260, 79, 260, 79);
                        bezierVertex(266, 90, 272, 92, 272, 92);
                        bezierVertex(275, 92, 277, 95, 277, 95);
                        bezierVertex(292, 108, 293, 108, 293, 108);
                        bezierVertex(306, 118, 314, 121, 314, 121);
                        bezierVertex(316, 124, 310, 123, 310, 123);
                        bezierVertex(304, 125, 299, 127, 286, 127);
                        bezierVertex(286, 127, 282, 127, 269, 131);
                        bezierVertex(269, 131, 256, 145, 237, 132);
                        bezierVertex(237, 132, 234, 130, 228, 129);
                        bezierVertex(228, 129, 218, 114, 210, 120);
                        bezierVertex(210, 120, 199, 126, 187, 122);
                        bezierVertex(187, 122, 181, 119, 175, 125);
                        bezierVertex(175, 125, 170, 130, 165, 129);
                        bezierVertex(165, 129, 160, 131, 152, 131);
                        bezierVertex(152, 131, 149, 129, 144, 125);
                        bezierVertex(144, 125, 140, 121, 131, 124);
                        bezierVertex(131, 124, 126, 123, 120, 122);
                        bezierVertex(120, 122, 112, 117, 105, 122);
                        bezierVertex(105, 122, 97, 133, 85, 129);
                        bezierVertex(85, 129, 79, 126, 77, 122);
                        bezierVertex(77, 122, 75, 119, 69, 121);
                        bezierVertex(69, 121, 59, 123, 44, 120);
                        bezierVertex(44, 120, 39, 115, 28, 116);
                        bezierVertex(28, 116, 23, 116, 18, 114);
                        endShape();
                        
                        // lighter dirt layer
                        fill(127, 84, 68);
                        beginShape();
                        vertex(77, 103);
                        bezierVertex(77, 103, 70, 115, 62, 116);
                        bezierVertex(62, 116, 38, 109, 45, 103);
                        bezierVertex(45, 103, 49, 98, 54, 92);
                        bezierVertex(54, 92, 61, 79, 71, 73);
                        bezierVertex(71, 73, 78, 68, 85, 72);
                        bezierVertex(85, 72, 95, 78, 101, 72);
                        bezierVertex(101, 72, 107, 67, 112, 68);
                        bezierVertex(112, 68, 123, 70, 123, 67);
                        bezierVertex(123, 67, 128, 64, 134, 60);
                        bezierVertex(141, 55, 132, 57, 132, 57);
                        bezierVertex(129, 58, 129, 51, 129, 51);
                        bezierVertex(132, 46, 132, 35, 132, 35);
                        bezierVertex(146, 21, 152, 22, 152, 22);
                        bezierVertex(157, 23, 160, 30, 160, 30);
                        bezierVertex(161, 34, 170, 36, 170, 36);
                        bezierVertex(176, 37, 179, 35, 179, 35);
                        bezierVertex(182, 34, 175, 33, 175, 33);
                        bezierVertex(168, 33, 172, 26, 172, 26);
                        bezierVertex(174, 23, 186, 17, 186, 17);
                        bezierVertex(194, 14, 201, 21, 207, 23);
                        bezierVertex(207, 23, 218, 27, 218, 36);
                        bezierVertex(218, 36, 219, 45, 223, 48);
                        bezierVertex(223, 48, 221, 49, 225, 53);
                        bezierVertex(225, 53, 231, 56, 232, 59);
                        bezierVertex(232, 59, 232, 67, 235, 69);
                        bezierVertex(235, 69, 236, 76, 239, 81);
                        bezierVertex(239, 81, 241, 82, 238, 72);
                        bezierVertex(238, 72, 238, 68, 236, 67);
                        bezierVertex(236, 67, 236, 62, 236, 55);
                        bezierVertex(236, 55, 251, 59, 252, 63);
                        bezierVertex(252, 63, 260, 79, 263, 87);
                        bezierVertex(263, 87, 261, 95, 266, 95);
                        bezierVertex(266, 95, 268, 95, 270, 99);
                        bezierVertex(270, 99, 272, 101, 275, 100);
                        bezierVertex(275, 100, 277, 104, 282, 108);
                        bezierVertex(282, 107, 281, 105, 281, 105);
                        bezierVertex(277, 102, 276, 97, 276, 97);
                        bezierVertex(275, 97, 275, 92, 275, 92);
                        bezierVertex(285, 96, 290, 102, 290, 102);
                        bezierVertex(292, 109, 297, 115, 297, 115);
                        bezierVertex(303, 119, 297, 119, 297, 119);
                        bezierVertex(291, 119, 288, 121, 288, 121);
                        bezierVertex(282, 112, 273, 105, 273, 105);
                        bezierVertex(266, 103, 255, 103, 255, 103);
                        bezierVertex(252, 101, 251, 97, 251, 97);
                        bezierVertex(244, 92, 243, 89, 243, 89);
                        bezierVertex(238, 87, 236, 83, 236, 83);
                        bezierVertex(234, 77, 234, 72, 234, 72);
                        bezierVertex(232, 67, 226, 67, 226, 67);
                        bezierVertex(225, 66, 220, 59, 220, 59);
                        bezierVertex(215, 55, 214, 55, 214, 55);
                        bezierVertex(208, 40, 202, 39, 202, 39);
                        bezierVertex(197, 34, 184, 38, 184, 38);
                        bezierVertex(173, 43, 168, 40, 168, 40);
                        bezierVertex(164, 37, 155, 43, 155, 43);
                        bezierVertex(145, 53, 139, 63, 139, 63);
                        bezierVertex(136, 65, 133, 67, 133, 67);
                        bezierVertex(130, 65, 125, 73, 125, 73);
                        bezierVertex(119, 85, 114, 87, 114, 87);
                        bezierVertex(110, 86, 102, 85, 102, 85);
                        bezierVertex(91, 83, 83, 97, 83, 97);
                        bezierVertex(84, 99, 86, 96, 86, 96);
                        bezierVertex(93, 90, 98, 91, 98, 91);
                        bezierVertex(108, 94, 116, 93, 116, 93);
                        bezierVertex(122, 89, 130, 83, 132, 85);
                        bezierVertex(132, 85, 136, 87, 141, 91);
                        bezierVertex(141, 91, 154, 93, 155, 95);
                        bezierVertex(155, 95, 163, 100, 166, 104);
                        bezierVertex(166, 104, 182, 110, 190, 111);
                        bezierVertex(190, 111, 195, 110, 205, 105);
                        bezierVertex(205, 105, 193, 106, 190, 105);
                        bezierVertex(190, 105, 180, 96, 175, 91);
                        bezierVertex(175, 91, 163, 89, 160, 80);
                        bezierVertex(160, 80, 159, 73, 153, 72);
                        bezierVertex(153, 72, 148, 70, 150, 63);
                        bezierVertex(150, 63, 154, 61, 158, 52);
                        bezierVertex(158, 52, 165, 45, 169, 47);
                        bezierVertex(169, 47, 178, 48, 188, 41);
                        bezierVertex(188, 41, 194, 38, 199, 43);
                        bezierVertex(199, 43, 203, 51, 204, 57);
                        bezierVertex(204, 57, 215, 69, 221, 71);
                        bezierVertex(221, 71, 232, 70, 230, 75);
                        bezierVertex(230, 75, 236, 96, 246, 99);
                        bezierVertex(247, 99, 248, 98, 248, 105);
                        bezierVertex(248, 105, 252, 105, 256, 110);
                        bezierVertex(256, 110, 267, 110, 272, 115);
                        bezierVertex(272, 115, 282, 115, 277, 119);
                        bezierVertex(277, 119, 268, 121, 259, 129);
                        bezierVertex(259, 129, 256, 131, 249, 129);
                        bezierVertex(249, 129, 238, 126, 235, 126);
                        bezierVertex(235, 126, 232, 124, 223, 113);
                        bezierVertex(223, 113, 228, 113, 232, 108);
                        bezierVertex(233, 109, 238, 110, 244, 114);
                        bezierVertex(244, 114, 251, 115, 254, 120);
                        bezierVertex(254, 120, 258, 120, 262, 120);
                        bezierVertex(262, 120, 254, 115, 251, 113);
                        bezierVertex(251, 113, 245, 112, 243, 109);
                        bezierVertex(243, 109, 241, 108, 238, 105);
                        bezierVertex(238, 105, 230, 101, 222, 106);
                        bezierVertex(222, 106, 208, 112, 205, 111);
                        bezierVertex(205, 111, 199, 115, 184, 115);
                        bezierVertex(184, 115, 171, 122, 163, 120);
                        bezierVertex(163, 120, 164, 117, 167, 116);
                        bezierVertex(167, 116, 162, 115, 158, 121);
                        bezierVertex(158, 121, 153, 123, 147, 121);
                        bezierVertex(147, 121, 144, 115, 130, 114);
                        bezierVertex(130, 114, 116, 113, 110, 113);
                        bezierVertex(110, 113, 105, 107, 101, 112);
                        bezierVertex(101, 112, 107, 112, 107, 114);
                        bezierVertex(107, 114, 108, 120, 94, 123);
                        bezierVertex(94, 123, 89, 123, 81, 118);
                        bezierVertex(81, 118, 76, 115, 75, 114);
                        bezierVertex(75, 114, 76, 110, 77, 107);
                        bezierVertex(77, 107, 78, 105, 76, 104);
                        endShape();
                        
                        // Lightest dirt layer
                        fill(164, 114, 99);
                        beginShape();
                        vertex(62, 90);
                        bezierVertex(62, 90, 67, 81, 74, 77);
                        bezierVertex(74, 77, 77, 76, 82, 78);
                        bezierVertex(82, 78, 89, 82, 82, 82);
                        bezierVertex(82, 82, 73, 81, 68, 87);
                        bezierVertex(64, 89, 63, 90, 63, 90);
                        endShape();
                        
                        beginShape();
                        vertex(89, 101);
                        bezierVertex(89, 101, 94, 91, 104, 96);
                        bezierVertex(104, 96, 110, 98, 112, 97);
                        bezierVertex(112, 97, 105, 101, 99, 98);
                        bezierVertex(99, 98, 93, 96, 90, 101);
                        endShape();
                        
                        beginShape();
                        vertex(116, 97);
                        bezierVertex(116, 97, 117, 100, 123, 97);
                        bezierVertex(123, 97, 120, 96, 115, 97);
                        endShape();
                        
                        beginShape();
                        vertex(139, 36);
                        bezierVertex(139, 36, 142, 28, 152, 27);
                        bezierVertex(152, 27, 152, 30, 148, 30);
                        bezierVertex(148, 30, 143, 32, 140, 36);
                        endShape();
                        
                        beginShape();
                        vertex(191, 52);
                        bezierVertex(191, 52, 182, 43, 174, 49);
                        bezierVertex(174, 49, 170, 53, 160, 56);
                        bezierVertex(160, 56, 160, 59, 170, 59);
                        bezierVertex(170, 59, 175, 58, 178, 55);
                        bezierVertex(178, 55, 182, 53, 190, 53);
                        endShape();
                        
                        beginShape();
                        vertex(179, 25);
                        bezierVertex(179, 25, 201, 18, 208, 28);
                        bezierVertex(208, 28, 214, 33, 212, 39);
                        bezierVertex(212, 39, 215, 44, 214, 47);
                        bezierVertex(212, 39, 209, 39, 209, 39);
                        bezierVertex(202, 37, 202, 32, 202, 32);
                        bezierVertex(194, 27, 181, 26, 181, 26);
                        endShape();
                        
                        beginShape();
                        vertex(220, 49);
                        bezierVertex(220, 49, 214, 45, 220, 54);
                        bezierVertex(220, 54, 228, 59, 228, 56);
                        bezierVertex(228, 56, 225, 55, 220, 49);
                        endShape();
                        
                        beginShape();
                        vertex(239, 65);
                        bezierVertex(239, 65, 245, 62, 250, 70);
                        bezierVertex(250, 70, 245, 68, 239, 65);
                        endShape();
                        
                        beginShape();
                        vertex(237, 113);
                        bezierVertex(237, 113, 229, 111, 236, 115);
                        bezierVertex(236, 115, 239, 116, 244, 120);
                        bezierVertex(244, 120, 249, 124, 243, 116);
                        bezierVertex(243, 116, 241, 114, 237, 112);
                        endShape();	
                        popMatrix();
                    },
			    
			    },
			    
			    pumpkin: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {

			            pushMatrix();
			            translate(112, 60);
			            scale(0.9)
			            
			            // stem
                        fill(0, 105, 7);
                        beginShape();
                        vertex(37, 155);
                        bezierVertex(37, 155, 41, 165, 48, 166);
                        bezierVertex(48, 166, 61, 166, 55, 158);
                        bezierVertex(55, 158, 39, 128, 48, 97);
                        bezierVertex(48, 97, 53, 78, 79, 67);
                        bezierVertex(79, 67, 100, 61, 124, 71);
                        bezierVertex(124, 71, 159, 89, 166, 113);
                        bezierVertex(166, 113, 177, 145, 151, 153);
                        bezierVertex(151, 153, 112, 158, 122, 127);
                        bezierVertex(122, 127, 126, 113, 139, 111);
                        bezierVertex(139, 111, 140, 108, 140, 107);
                        bezierVertex(140, 107, 121, 110, 111, 125);
                        bezierVertex(111, 125, 97, 152, 131, 163);
                        bezierVertex(131, 163, 172, 176, 181, 133);
                        bezierVertex(181, 133, 185, 93, 135, 63);
                        bezierVertex(135, 63, 100, 44, 64, 61);
                        bezierVertex(64, 61, 30, 77, 30, 125);
                        bezierVertex(30, 125, 30, 137, 37, 156);
                        endShape();
                        
                        // all leafs
                        fill(0, 171, 11);
                        beginShape();
                        vertex(36, 87);
                        bezierVertex(36, 87, 41, 74, 40, 57);
                        bezierVertex(40, 57, 43, 67, 42, 78);
                        bezierVertex(42, 78, 38, 86, 35, 87);
                        endShape();
                        
                        beginShape();
                        vertex(35, 56);
                        bezierVertex(35, 56, 42, 68, 26, 76);
                        bezierVertex(26, 76, 20, 73, 19, 62);
                        bezierVertex(18, 63, 10, 66, 4, 55);
                        bezierVertex(4, 55, 5, 48, 7, 45);
                        bezierVertex(7, 45, 4, 42, 1, 33);
                        bezierVertex(0, 28, 0, 28, 0, 29);
                        bezierVertex(1, 29, 10, 21, 21, 26);
                        bezierVertex(21, 26, 24, 22, 28, 20);
                        bezierVertex(28, 20, 40, 23, 43, 32);
                        bezierVertex(43, 32, 52, 30, 54, 36);
                        bezierVertex(54, 36, 50, 49, 41, 50);
                        bezierVertex(41, 50, 46, 47, 47, 41);
                        bezierVertex(47, 41, 43, 48, 39, 50);
                        bezierVertex(39, 50, 40, 41, 35, 32);
                        bezierVertex(35, 32, 38, 43, 36, 49);
                        bezierVertex(36, 49, 17, 30, 1, 29);
                        bezierVertex(1, 29, 26, 39, 35, 53);
                        bezierVertex(35, 53, 27, 56, 17, 59);
                        bezierVertex(17, 59, 27, 59, 35, 55);
                        bezierVertex(35, 55, 31, 66, 27, 72);
                        bezierVertex(27, 72, 33, 67, 36, 57);
                        endShape();
                        
                        beginShape();
                        vertex(75, 54);
                        bezierVertex(75, 54, 91, 47, 106, 48);
                        bezierVertex(106, 48, 124, 48, 127, 41);
                        bezierVertex(127, 41, 123, 50, 103, 49);
                        bezierVertex(103, 49, 95, 48, 85, 53);
                        bezierVertex(85, 53, 81, 54, 76, 54);
                        endShape();
                        
                        beginShape();
                        vertex(123, 39);
                        bezierVertex(123, 39, 117, 45, 109, 39);
                        bezierVertex(109, 39, 106, 36, 105, 36);
                        bezierVertex(105, 36, 109, 28, 114, 25);
                        bezierVertex(114, 25, 113, 17, 118, 9);
                        bezierVertex(118, 9, 122, 9, 130, 9);
                        bezierVertex(130, 9, 133, 2, 143, 0);
                        bezierVertex(143, 0, 150, 8, 150, 19);
                        bezierVertex(150, 19, 155, 22, 156, 25);
                        bezierVertex(156, 25, 154, 36, 149, 40);
                        bezierVertex(149, 40, 150, 49, 149, 53);
                        bezierVertex(149, 53, 135, 52, 132, 43);
                        bezierVertex(132, 43, 134, 46, 140, 46);
                        bezierVertex(140, 46, 132, 43, 132, 40);
                        bezierVertex(132, 40, 140, 38, 147, 34);
                        bezierVertex(147, 34, 136, 39, 131, 38);
                        bezierVertex(131, 38, 141, 23, 142, 3);
                        bezierVertex(142, 3, 138, 26, 128, 37);
                        bezierVertex(128, 37, 122, 35, 118, 23);
                        bezierVertex(118, 23, 118, 30, 125, 38);
                        bezierVertex(125, 38, 116, 39, 109, 36);
                        bezierVertex(109, 36, 114, 40, 122, 39);
                        endShape();
                        
                        beginShape();
                        vertex(158, 80);
                        bezierVertex(158, 80, 168, 79, 173, 85);
                        bezierVertex(173, 85, 168, 83, 159, 81);
                        endShape();
                        
                        beginShape();
                        vertex(173, 81);
                        bezierVertex(173, 81, 167, 79, 167, 73);
                        bezierVertex(167, 73, 167, 67, 167, 66);
                        bezierVertex(167, 66, 176, 65, 179, 66);
                        bezierVertex(179, 66, 184, 61, 190, 60);
                        bezierVertex(190, 60, 194, 63, 196, 67);
                        bezierVertex(196, 67, 202, 67, 210, 70);
                        bezierVertex(210, 70, 213, 81, 201, 86);
                        bezierVertex(201, 86, 202, 91, 203, 94);
                        bezierVertex(203, 94, 200, 100, 188, 99);
                        bezierVertex(188, 99, 186, 103, 181, 104);
                        bezierVertex(181, 104, 172, 95, 176, 86);
                        bezierVertex(176, 86, 177, 92, 181, 96);
                        bezierVertex(181, 96, 178, 89, 178, 86);
                        bezierVertex(178, 86, 184, 92, 192, 92);
                        bezierVertex(192, 92, 183, 89, 179, 84);
                        bezierVertex(179, 84, 207, 82, 210, 70);
                        bezierVertex(210, 70, 201, 81, 178, 82);
                        bezierVertex(178, 82, 178, 77, 183, 68);
                        bezierVertex(183, 68, 179, 72, 177, 81);
                        bezierVertex(177, 81, 173, 76, 169, 68);
                        bezierVertex(169, 68, 170, 73, 173, 80);
                        endShape();
                        
                        beginShape();
                        vertex(181, 132);
                        bezierVertex(181, 132, 189, 136, 190, 142);
                        bezierVertex(190, 142, 188, 136, 181, 134);
                        endShape();
                        
                        beginShape();
                        vertex(191, 139);
                        bezierVertex(191, 139, 188, 133, 194, 127);
                        bezierVertex(194, 127, 199, 129, 201, 133);
                        bezierVertex(201, 133, 208, 131, 212, 135);
                        bezierVertex(212, 135, 214, 139, 212, 142);
                        bezierVertex(212, 142, 218, 148, 220, 153);
                        bezierVertex(220, 153, 216, 157, 207, 157);
                        bezierVertex(207, 157, 204, 163, 202, 163);
                        bezierVertex(202, 163, 191, 161, 191, 158);
                        bezierVertex(191, 158, 187, 159, 183, 158);
                        bezierVertex(183, 158, 183, 147, 190, 145);
                        bezierVertex(190, 145, 187, 147, 188, 152);
                        bezierVertex(188, 152, 189, 146, 191, 146);
                        bezierVertex(191, 146, 193, 153, 198, 156);
                        bezierVertex(198, 156, 193, 149, 193, 144);
                        bezierVertex(193, 144, 211, 156, 218, 152);
                        bezierVertex(218, 152, 194, 148, 194, 142);
                        bezierVertex(194, 142, 200, 137, 203, 136);
                        bezierVertex(203, 136, 200, 137, 193, 141);
                        bezierVertex(193, 141, 193, 136, 196, 130);
                        bezierVertex(196, 130, 195, 131, 191, 139);
                        endShape();
                        
                        beginShape();
                        vertex(51, 145);
                        bezierVertex(51, 145, 53, 132, 55, 124);
                        bezierVertex(55, 124, 56, 117, 62, 112);
                        bezierVertex(62, 112, 55, 121, 55, 133);
                        bezierVertex(55, 133, 53, 146, 52, 147);
                        endShape();
                        
                        beginShape();
                        vertex(61, 108);
                        bezierVertex(61, 108, 51, 104, 54, 88);
                        bezierVertex(54, 88, 59, 87, 64, 90);
                        bezierVertex(64, 90, 73, 82, 82, 85);
                        bezierVertex(82, 85, 85, 89, 86, 91);
                        bezierVertex(86, 91, 100, 90, 107, 99);
                        bezierVertex(107, 99, 104, 108, 96, 112);
                        bezierVertex(96, 112, 96, 122, 93, 127);
                        bezierVertex(93, 127, 85, 131, 78, 128);
                        bezierVertex(78, 128, 74, 135, 66, 137);
                        bezierVertex(66, 137, 58, 126, 64, 117);
                        bezierVertex(64, 117, 64, 126, 66, 131);
                        bezierVertex(66, 131, 67, 118, 66, 114);
                        bezierVertex(66, 114, 70, 119, 79, 122);
                        bezierVertex(79, 122, 66, 115, 66, 111);
                        bezierVertex(66, 111, 84, 99, 103, 102);
                        bezierVertex(103, 102, 88, 99, 67, 109);
                        bezierVertex(67, 109, 64, 105, 73, 94);
                        bezierVertex(73, 94, 65, 98, 64, 109);
                        bezierVertex(64, 109, 58, 102, 58, 95);
                        bezierVertex(58, 95, 57, 103, 60, 108);
                        endShape();
                        
                        beginShape();
                        vertex(124, 109);
                        vertex(128, 103);
                        vertex(125, 111);
                        endShape();
                        
                        beginShape();
                        vertex(124, 103);
                        bezierVertex(124, 103, 121, 111, 112, 107);
                        bezierVertex(112, 107, 112, 101, 116, 100);
                        bezierVertex(116, 100, 112, 94, 112, 89);
                        bezierVertex(112, 89, 114, 87, 118, 87);
                        bezierVertex(118, 87, 118, 81, 122, 77);
                        bezierVertex(122, 77, 130, 80, 132, 85);
                        bezierVertex(132, 85, 135, 85, 138, 85);
                        bezierVertex(138, 85, 142, 94, 138, 96);
                        bezierVertex(138, 96, 143, 97, 141, 102);
                        bezierVertex(141, 102, 135, 106, 129, 103);
                        bezierVertex(129, 103, 133, 103, 134, 101);
                        bezierVertex(134, 101, 131, 101, 129, 101);
                        bezierVertex(129, 101, 134, 99, 134, 95);
                        bezierVertex(134, 95, 129, 99, 128, 100);
                        bezierVertex(128, 100, 129, 89, 123, 79);
                        bezierVertex(123, 79, 127, 91, 127, 100);
                        bezierVertex(127, 100, 121, 100, 117, 96);
                        bezierVertex(117, 96, 119, 100, 124, 101);
                        bezierVertex(124, 101, 121, 104, 116, 105);
                        bezierVertex(116, 105, 120, 106, 124, 103);
                        endShape();

                        beginShape();
                        vertex(141, 110);
                        bezierVertex(141, 110, 140, 101, 148, 101);
                        bezierVertex(148, 101, 151, 104, 151, 108);
                        bezierVertex(151, 108, 159, 108, 160, 115);
                        bezierVertex(160, 115, 159, 119, 156, 119);
                        bezierVertex(156, 119, 162, 126, 159, 130);
                        bezierVertex(159, 130, 154, 136, 148, 129);
                        bezierVertex(148, 129, 145, 133, 142, 134);
                        bezierVertex(142, 134, 135, 131, 136, 125);
                        bezierVertex(136, 125, 131, 127, 130, 122);
                        bezierVertex(130, 122, 130, 115, 138, 114);
                        bezierVertex(138, 114, 134, 116, 134, 119);
                        bezierVertex(134, 119, 135, 115, 139, 115);
                        bezierVertex(139, 115, 138, 123, 141, 126);
                        bezierVertex(141, 126, 141, 121, 141, 115);
                        bezierVertex(141, 115, 146, 128, 158, 130);
                        bezierVertex(158, 130, 145, 122, 142, 115);
                        bezierVertex(142, 115, 150, 114, 154, 111);
                        bezierVertex(153, 111, 147, 116, 143, 112);
                        bezierVertex(143, 112, 144, 109, 149, 103);
                        bezierVertex(149, 103, 144, 105, 141, 111);
                        endShape();
                        popMatrix();
			            
			            pushMatrix();
			            translate(0, 190);
			            scale(1, 0.3);
			            
                        // dark dirt layer
                        noStroke();
                        fill(96, 56, 56);
                        beginShape();
                        vertex(18, 114);
                        bezierVertex(18, 114, 22, 114, 25, 111);
                        bezierVertex(25, 111, 28, 109, 34, 109);
                        bezierVertex(34, 109, 37, 109, 43, 103);
                        bezierVertex(43, 103, 45, 101, 50, 98);
                        bezierVertex(50, 98, 67, 99, 95, 83);
                        bezierVertex(95, 83, 111, 67, 111, 67);
                        bezierVertex(121, 67, 122, 60, 122, 60);
                        bezierVertex(124, 52, 127, 47, 127, 47);
                        bezierVertex(129, 43, 132, 35, 132, 35);
                        bezierVertex(148, 46, 152, 22, 152, 22);
                        bezierVertex(157, 22, 162, 24, 162, 24);
                        bezierVertex(167, 25, 171, 22, 171, 22);
                        bezierVertex(179, 19, 184, 17, 184, 17);
                        bezierVertex(197, 19, 222, 47, 222, 47);
                        bezierVertex(231, 54, 237, 56, 237, 56);
                        bezierVertex(249, 71, 260, 79, 260, 79);
                        bezierVertex(266, 90, 272, 92, 272, 92);
                        bezierVertex(275, 92, 277, 95, 277, 95);
                        bezierVertex(292, 108, 293, 108, 293, 108);
                        bezierVertex(306, 118, 314, 121, 314, 121);
                        bezierVertex(316, 124, 310, 123, 310, 123);
                        bezierVertex(304, 125, 299, 127, 286, 127);
                        bezierVertex(286, 127, 282, 127, 269, 131);
                        bezierVertex(269, 131, 256, 145, 237, 132);
                        bezierVertex(237, 132, 234, 130, 228, 129);
                        bezierVertex(228, 129, 218, 114, 210, 120);
                        bezierVertex(210, 120, 199, 126, 187, 122);
                        bezierVertex(187, 122, 181, 119, 175, 125);
                        bezierVertex(175, 125, 170, 130, 165, 129);
                        bezierVertex(165, 129, 160, 131, 152, 131);
                        bezierVertex(152, 131, 149, 129, 144, 125);
                        bezierVertex(144, 125, 140, 121, 131, 124);
                        bezierVertex(131, 124, 126, 123, 120, 122);
                        bezierVertex(120, 122, 112, 117, 105, 122);
                        bezierVertex(105, 122, 97, 133, 85, 129);
                        bezierVertex(85, 129, 79, 126, 77, 122);
                        bezierVertex(77, 122, 75, 119, 69, 121);
                        bezierVertex(69, 121, 59, 123, 44, 120);
                        bezierVertex(44, 120, 39, 115, 28, 116);
                        bezierVertex(28, 116, 23, 116, 18, 114);
                        endShape();
                        
                        // lighter dirt layer
                        fill(127, 84, 68);
                        beginShape();
                        vertex(77, 103);
                        bezierVertex(77, 103, 70, 115, 62, 116);
                        bezierVertex(62, 116, 38, 109, 45, 103);
                        bezierVertex(45, 103, 49, 98, 54, 92);
                        bezierVertex(54, 92, 61, 79, 71, 73);
                        bezierVertex(71, 73, 78, 68, 85, 72);
                        bezierVertex(85, 72, 95, 78, 101, 72);
                        bezierVertex(101, 72, 107, 67, 112, 68);
                        bezierVertex(112, 68, 123, 70, 123, 67);
                        bezierVertex(123, 67, 128, 64, 134, 60);
                        bezierVertex(141, 55, 132, 57, 132, 57);
                        bezierVertex(129, 58, 129, 51, 129, 51);
                        bezierVertex(132, 46, 132, 35, 132, 35);
                        bezierVertex(146, 21, 152, 22, 152, 22);
                        bezierVertex(157, 23, 160, 30, 160, 30);
                        bezierVertex(161, 34, 170, 36, 170, 36);
                        bezierVertex(176, 37, 179, 35, 179, 35);
                        bezierVertex(182, 34, 175, 33, 175, 33);
                        bezierVertex(168, 33, 172, 26, 172, 26);
                        bezierVertex(174, 23, 186, 17, 186, 17);
                        bezierVertex(194, 14, 201, 21, 207, 23);
                        bezierVertex(207, 23, 218, 27, 218, 36);
                        bezierVertex(218, 36, 219, 45, 223, 48);
                        bezierVertex(223, 48, 221, 49, 225, 53);
                        bezierVertex(225, 53, 231, 56, 232, 59);
                        bezierVertex(232, 59, 232, 67, 235, 69);
                        bezierVertex(235, 69, 236, 76, 239, 81);
                        bezierVertex(239, 81, 241, 82, 238, 72);
                        bezierVertex(238, 72, 238, 68, 236, 67);
                        bezierVertex(236, 67, 236, 62, 236, 55);
                        bezierVertex(236, 55, 251, 59, 252, 63);
                        bezierVertex(252, 63, 260, 79, 263, 87);
                        bezierVertex(263, 87, 261, 95, 266, 95);
                        bezierVertex(266, 95, 268, 95, 270, 99);
                        bezierVertex(270, 99, 272, 101, 275, 100);
                        bezierVertex(275, 100, 277, 104, 282, 108);
                        bezierVertex(282, 107, 281, 105, 281, 105);
                        bezierVertex(277, 102, 276, 97, 276, 97);
                        bezierVertex(275, 97, 275, 92, 275, 92);
                        bezierVertex(285, 96, 290, 102, 290, 102);
                        bezierVertex(292, 109, 297, 115, 297, 115);
                        bezierVertex(303, 119, 297, 119, 297, 119);
                        bezierVertex(291, 119, 288, 121, 288, 121);
                        bezierVertex(282, 112, 273, 105, 273, 105);
                        bezierVertex(266, 103, 255, 103, 255, 103);
                        bezierVertex(252, 101, 251, 97, 251, 97);
                        bezierVertex(244, 92, 243, 89, 243, 89);
                        bezierVertex(238, 87, 236, 83, 236, 83);
                        bezierVertex(234, 77, 234, 72, 234, 72);
                        bezierVertex(232, 67, 226, 67, 226, 67);
                        bezierVertex(225, 66, 220, 59, 220, 59);
                        bezierVertex(215, 55, 214, 55, 214, 55);
                        bezierVertex(208, 40, 202, 39, 202, 39);
                        bezierVertex(197, 34, 184, 38, 184, 38);
                        bezierVertex(173, 43, 168, 40, 168, 40);
                        bezierVertex(164, 37, 155, 43, 155, 43);
                        bezierVertex(145, 53, 139, 63, 139, 63);
                        bezierVertex(136, 65, 133, 67, 133, 67);
                        bezierVertex(130, 65, 125, 73, 125, 73);
                        bezierVertex(119, 85, 114, 87, 114, 87);
                        bezierVertex(110, 86, 102, 85, 102, 85);
                        bezierVertex(91, 83, 83, 97, 83, 97);
                        bezierVertex(84, 99, 86, 96, 86, 96);
                        bezierVertex(93, 90, 98, 91, 98, 91);
                        bezierVertex(108, 94, 116, 93, 116, 93);
                        bezierVertex(122, 89, 130, 83, 132, 85);
                        bezierVertex(132, 85, 136, 87, 141, 91);
                        bezierVertex(141, 91, 154, 93, 155, 95);
                        bezierVertex(155, 95, 163, 100, 166, 104);
                        bezierVertex(166, 104, 182, 110, 190, 111);
                        bezierVertex(190, 111, 195, 110, 205, 105);
                        bezierVertex(205, 105, 193, 106, 190, 105);
                        bezierVertex(190, 105, 180, 96, 175, 91);
                        bezierVertex(175, 91, 163, 89, 160, 80);
                        bezierVertex(160, 80, 159, 73, 153, 72);
                        bezierVertex(153, 72, 148, 70, 150, 63);
                        bezierVertex(150, 63, 154, 61, 158, 52);
                        bezierVertex(158, 52, 165, 45, 169, 47);
                        bezierVertex(169, 47, 178, 48, 188, 41);
                        bezierVertex(188, 41, 194, 38, 199, 43);
                        bezierVertex(199, 43, 203, 51, 204, 57);
                        bezierVertex(204, 57, 215, 69, 221, 71);
                        bezierVertex(221, 71, 232, 70, 230, 75);
                        bezierVertex(230, 75, 236, 96, 246, 99);
                        bezierVertex(247, 99, 248, 98, 248, 105);
                        bezierVertex(248, 105, 252, 105, 256, 110);
                        bezierVertex(256, 110, 267, 110, 272, 115);
                        bezierVertex(272, 115, 282, 115, 277, 119);
                        bezierVertex(277, 119, 268, 121, 259, 129);
                        bezierVertex(259, 129, 256, 131, 249, 129);
                        bezierVertex(249, 129, 238, 126, 235, 126);
                        bezierVertex(235, 126, 232, 124, 223, 113);
                        bezierVertex(223, 113, 228, 113, 232, 108);
                        bezierVertex(233, 109, 238, 110, 244, 114);
                        bezierVertex(244, 114, 251, 115, 254, 120);
                        bezierVertex(254, 120, 258, 120, 262, 120);
                        bezierVertex(262, 120, 254, 115, 251, 113);
                        bezierVertex(251, 113, 245, 112, 243, 109);
                        bezierVertex(243, 109, 241, 108, 238, 105);
                        bezierVertex(238, 105, 230, 101, 222, 106);
                        bezierVertex(222, 106, 208, 112, 205, 111);
                        bezierVertex(205, 111, 199, 115, 184, 115);
                        bezierVertex(184, 115, 171, 122, 163, 120);
                        bezierVertex(163, 120, 164, 117, 167, 116);
                        bezierVertex(167, 116, 162, 115, 158, 121);
                        bezierVertex(158, 121, 153, 123, 147, 121);
                        bezierVertex(147, 121, 144, 115, 130, 114);
                        bezierVertex(130, 114, 116, 113, 110, 113);
                        bezierVertex(110, 113, 105, 107, 101, 112);
                        bezierVertex(101, 112, 107, 112, 107, 114);
                        bezierVertex(107, 114, 108, 120, 94, 123);
                        bezierVertex(94, 123, 89, 123, 81, 118);
                        bezierVertex(81, 118, 76, 115, 75, 114);
                        bezierVertex(75, 114, 76, 110, 77, 107);
                        bezierVertex(77, 107, 78, 105, 76, 104);
                        endShape();
                        
                        // Lightest dirt layer
                        fill(164, 114, 99);
                        beginShape();
                        vertex(62, 90);
                        bezierVertex(62, 90, 67, 81, 74, 77);
                        bezierVertex(74, 77, 77, 76, 82, 78);
                        bezierVertex(82, 78, 89, 82, 82, 82);
                        bezierVertex(82, 82, 73, 81, 68, 87);
                        bezierVertex(64, 89, 63, 90, 63, 90);
                        endShape();
                        
                        beginShape();
                        vertex(89, 101);
                        bezierVertex(89, 101, 94, 91, 104, 96);
                        bezierVertex(104, 96, 110, 98, 112, 97);
                        bezierVertex(112, 97, 105, 101, 99, 98);
                        bezierVertex(99, 98, 93, 96, 90, 101);
                        endShape();
                        
                        beginShape();
                        vertex(116, 97);
                        bezierVertex(116, 97, 117, 100, 123, 97);
                        bezierVertex(123, 97, 120, 96, 115, 97);
                        endShape();
                        
                        beginShape();
                        vertex(139, 36);
                        bezierVertex(139, 36, 142, 28, 152, 27);
                        bezierVertex(152, 27, 152, 30, 148, 30);
                        bezierVertex(148, 30, 143, 32, 140, 36);
                        endShape();
                        
                        beginShape();
                        vertex(191, 52);
                        bezierVertex(191, 52, 182, 43, 174, 49);
                        bezierVertex(174, 49, 170, 53, 160, 56);
                        bezierVertex(160, 56, 160, 59, 170, 59);
                        bezierVertex(170, 59, 175, 58, 178, 55);
                        bezierVertex(178, 55, 182, 53, 190, 53);
                        endShape();
                        
                        beginShape();
                        vertex(179, 25);
                        bezierVertex(179, 25, 201, 18, 208, 28);
                        bezierVertex(208, 28, 214, 33, 212, 39);
                        bezierVertex(212, 39, 215, 44, 214, 47);
                        bezierVertex(212, 39, 209, 39, 209, 39);
                        bezierVertex(202, 37, 202, 32, 202, 32);
                        bezierVertex(194, 27, 181, 26, 181, 26);
                        endShape();
                        
                        beginShape();
                        vertex(220, 49);
                        bezierVertex(220, 49, 214, 45, 220, 54);
                        bezierVertex(220, 54, 228, 59, 228, 56);
                        bezierVertex(228, 56, 225, 55, 220, 49);
                        endShape();
                        
                        beginShape();
                        vertex(239, 65);
                        bezierVertex(239, 65, 245, 62, 250, 70);
                        bezierVertex(250, 70, 245, 68, 239, 65);
                        endShape();
                        
                        beginShape();
                        vertex(237, 113);
                        bezierVertex(237, 113, 229, 111, 236, 115);
                        bezierVertex(236, 115, 239, 116, 244, 120);
                        bezierVertex(244, 120, 249, 124, 243, 116);
                        bezierVertex(243, 116, 241, 114, 237, 112);
                        endShape();	
                        popMatrix();
                        
                        // pumpkin
			            pushMatrix();
			            translate(4, -130);
			            scale(0.9);
			            rotate(10);
                        noStroke();
                        fill(255, 140, 0);
                        beginShape();
                        vertex(281, 261);
                        bezierVertex(262, 260, 254, 289, 254, 289);
                        bezierVertex(249, 334, 279, 335, 279, 335);
                        bezierVertex(288, 343, 297, 338, 297, 338);
                        bezierVertex(311, 349, 322, 339, 322, 339);
                        bezierVertex(334, 342, 340, 334, 340, 334);
                        bezierVertex(357, 337, 365, 307, 365, 307);
                        bezierVertex(368, 266, 340, 261, 340, 261);
                        bezierVertex(337, 261, 337, 261, 337, 261);
                        bezierVertex(330, 255, 321, 259, 321, 259);
                        bezierVertex(311, 255, 298, 258, 298, 258);
                        bezierVertex(287, 256, 281, 262, 281, 262);
                        endShape();
                        
                        // lighting
                        fill(255, 164, 0);
                        beginShape();
                        vertex(276, 265);
                        bezierVertex(248, 274, 258, 314, 258, 314);
                        bezierVertex(265, 329, 276, 331, 276, 331);
                        bezierVertex(253, 297, 276, 266, 276, 266);
                        endShape();
                        
                        beginShape();
                        vertex(294, 261);
                        bezierVertex(294, 261, 273, 264, 269, 289);
                        bezierVertex(269, 289, 266, 323, 285, 334);
                        bezierVertex(285, 334, 290, 336, 295, 336);
                        bezierVertex(295, 336, 266, 305, 294, 262);
                        endShape();
                        
                        beginShape();
                        vertex(309, 258);
                        bezierVertex(309, 258, 293, 263, 289, 277);
                        bezierVertex(289, 277, 277, 308, 296, 333);
                        bezierVertex(296, 333, 313, 351, 328, 325);
                        bezierVertex(328, 325, 345, 294, 323, 265);
                        bezierVertex(323, 265, 317, 259, 308, 259);
                        endShape();
                        
                        beginShape();
                        vertex(324, 261);
                        bezierVertex(324, 261, 351, 262, 351, 302);
                        bezierVertex(351, 302, 351, 335, 324, 336);
                        bezierVertex(324, 336, 354, 302, 325, 261);
                        endShape();
                        
                        beginShape();
                        vertex(344, 330);
                        bezierVertex(344, 330, 366, 303, 345, 266);
                        bezierVertex(345, 266, 368, 283, 361, 309);
                        bezierVertex(361, 309, 355, 327, 344, 330);
                        endShape();
                        
                        // stem
                        fill(0, 105, 7);
                        beginShape();
                        vertex(322, 258);
                        bezierVertex(322, 258, 312, 252, 316, 239);
                        bezierVertex(316, 239, 308, 239, 303, 234);
                        bezierVertex(303, 234, 307, 249, 298, 259);
                        bezierVertex(298, 259, 309, 256, 321, 259);
                        endShape();
                        
                        // lighting in stem
                        fill(5, 140, 14);
                        beginShape();
                        vertex(308, 242);
                        bezierVertex(308, 242, 307, 250, 314, 253);
                        bezierVertex(312, 253, 312, 253, 317, 255);
                        bezierVertex(317, 255, 313, 248, 314, 243);
                        bezierVertex(314, 243, 310, 243, 309, 242);
                        endShape();
                        popMatrix();
			        },
			    
			    },
			    
			    glow: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {
			            pushMatrix();
			            translate(0, 190);
			            scale(1, 0.3);
			            
                        // dark dirt layer
                        noStroke();
                        fill(96, 56, 56);
                        beginShape();
                        vertex(18, 114);
                        bezierVertex(18, 114, 22, 114, 25, 111);
                        bezierVertex(25, 111, 28, 109, 34, 109);
                        bezierVertex(34, 109, 37, 109, 43, 103);
                        bezierVertex(43, 103, 45, 101, 50, 98);
                        bezierVertex(50, 98, 67, 99, 95, 83);
                        bezierVertex(95, 83, 111, 67, 111, 67);
                        bezierVertex(121, 67, 122, 60, 122, 60);
                        bezierVertex(124, 52, 127, 47, 127, 47);
                        bezierVertex(129, 43, 132, 35, 132, 35);
                        bezierVertex(148, 46, 152, 22, 152, 22);
                        bezierVertex(157, 22, 162, 24, 162, 24);
                        bezierVertex(167, 25, 171, 22, 171, 22);
                        bezierVertex(179, 19, 184, 17, 184, 17);
                        bezierVertex(197, 19, 222, 47, 222, 47);
                        bezierVertex(231, 54, 237, 56, 237, 56);
                        bezierVertex(249, 71, 260, 79, 260, 79);
                        bezierVertex(266, 90, 272, 92, 272, 92);
                        bezierVertex(275, 92, 277, 95, 277, 95);
                        bezierVertex(292, 108, 293, 108, 293, 108);
                        bezierVertex(306, 118, 314, 121, 314, 121);
                        bezierVertex(316, 124, 310, 123, 310, 123);
                        bezierVertex(304, 125, 299, 127, 286, 127);
                        bezierVertex(286, 127, 282, 127, 269, 131);
                        bezierVertex(269, 131, 256, 145, 237, 132);
                        bezierVertex(237, 132, 234, 130, 228, 129);
                        bezierVertex(228, 129, 218, 114, 210, 120);
                        bezierVertex(210, 120, 199, 126, 187, 122);
                        bezierVertex(187, 122, 181, 119, 175, 125);
                        bezierVertex(175, 125, 170, 130, 165, 129);
                        bezierVertex(165, 129, 160, 131, 152, 131);
                        bezierVertex(152, 131, 149, 129, 144, 125);
                        bezierVertex(144, 125, 140, 121, 131, 124);
                        bezierVertex(131, 124, 126, 123, 120, 122);
                        bezierVertex(120, 122, 112, 117, 105, 122);
                        bezierVertex(105, 122, 97, 133, 85, 129);
                        bezierVertex(85, 129, 79, 126, 77, 122);
                        bezierVertex(77, 122, 75, 119, 69, 121);
                        bezierVertex(69, 121, 59, 123, 44, 120);
                        bezierVertex(44, 120, 39, 115, 28, 116);
                        bezierVertex(28, 116, 23, 116, 18, 114);
                        endShape();
                        
                        // lighter dirt layer
                        fill(127, 84, 68);
                        beginShape();
                        vertex(77, 103);
                        bezierVertex(77, 103, 70, 115, 62, 116);
                        bezierVertex(62, 116, 38, 109, 45, 103);
                        bezierVertex(45, 103, 49, 98, 54, 92);
                        bezierVertex(54, 92, 61, 79, 71, 73);
                        bezierVertex(71, 73, 78, 68, 85, 72);
                        bezierVertex(85, 72, 95, 78, 101, 72);
                        bezierVertex(101, 72, 107, 67, 112, 68);
                        bezierVertex(112, 68, 123, 70, 123, 67);
                        bezierVertex(123, 67, 128, 64, 134, 60);
                        bezierVertex(141, 55, 132, 57, 132, 57);
                        bezierVertex(129, 58, 129, 51, 129, 51);
                        bezierVertex(132, 46, 132, 35, 132, 35);
                        bezierVertex(146, 21, 152, 22, 152, 22);
                        bezierVertex(157, 23, 160, 30, 160, 30);
                        bezierVertex(161, 34, 170, 36, 170, 36);
                        bezierVertex(176, 37, 179, 35, 179, 35);
                        bezierVertex(182, 34, 175, 33, 175, 33);
                        bezierVertex(168, 33, 172, 26, 172, 26);
                        bezierVertex(174, 23, 186, 17, 186, 17);
                        bezierVertex(194, 14, 201, 21, 207, 23);
                        bezierVertex(207, 23, 218, 27, 218, 36);
                        bezierVertex(218, 36, 219, 45, 223, 48);
                        bezierVertex(223, 48, 221, 49, 225, 53);
                        bezierVertex(225, 53, 231, 56, 232, 59);
                        bezierVertex(232, 59, 232, 67, 235, 69);
                        bezierVertex(235, 69, 236, 76, 239, 81);
                        bezierVertex(239, 81, 241, 82, 238, 72);
                        bezierVertex(238, 72, 238, 68, 236, 67);
                        bezierVertex(236, 67, 236, 62, 236, 55);
                        bezierVertex(236, 55, 251, 59, 252, 63);
                        bezierVertex(252, 63, 260, 79, 263, 87);
                        bezierVertex(263, 87, 261, 95, 266, 95);
                        bezierVertex(266, 95, 268, 95, 270, 99);
                        bezierVertex(270, 99, 272, 101, 275, 100);
                        bezierVertex(275, 100, 277, 104, 282, 108);
                        bezierVertex(282, 107, 281, 105, 281, 105);
                        bezierVertex(277, 102, 276, 97, 276, 97);
                        bezierVertex(275, 97, 275, 92, 275, 92);
                        bezierVertex(285, 96, 290, 102, 290, 102);
                        bezierVertex(292, 109, 297, 115, 297, 115);
                        bezierVertex(303, 119, 297, 119, 297, 119);
                        bezierVertex(291, 119, 288, 121, 288, 121);
                        bezierVertex(282, 112, 273, 105, 273, 105);
                        bezierVertex(266, 103, 255, 103, 255, 103);
                        bezierVertex(252, 101, 251, 97, 251, 97);
                        bezierVertex(244, 92, 243, 89, 243, 89);
                        bezierVertex(238, 87, 236, 83, 236, 83);
                        bezierVertex(234, 77, 234, 72, 234, 72);
                        bezierVertex(232, 67, 226, 67, 226, 67);
                        bezierVertex(225, 66, 220, 59, 220, 59);
                        bezierVertex(215, 55, 214, 55, 214, 55);
                        bezierVertex(208, 40, 202, 39, 202, 39);
                        bezierVertex(197, 34, 184, 38, 184, 38);
                        bezierVertex(173, 43, 168, 40, 168, 40);
                        bezierVertex(164, 37, 155, 43, 155, 43);
                        bezierVertex(145, 53, 139, 63, 139, 63);
                        bezierVertex(136, 65, 133, 67, 133, 67);
                        bezierVertex(130, 65, 125, 73, 125, 73);
                        bezierVertex(119, 85, 114, 87, 114, 87);
                        bezierVertex(110, 86, 102, 85, 102, 85);
                        bezierVertex(91, 83, 83, 97, 83, 97);
                        bezierVertex(84, 99, 86, 96, 86, 96);
                        bezierVertex(93, 90, 98, 91, 98, 91);
                        bezierVertex(108, 94, 116, 93, 116, 93);
                        bezierVertex(122, 89, 130, 83, 132, 85);
                        bezierVertex(132, 85, 136, 87, 141, 91);
                        bezierVertex(141, 91, 154, 93, 155, 95);
                        bezierVertex(155, 95, 163, 100, 166, 104);
                        bezierVertex(166, 104, 182, 110, 190, 111);
                        bezierVertex(190, 111, 195, 110, 205, 105);
                        bezierVertex(205, 105, 193, 106, 190, 105);
                        bezierVertex(190, 105, 180, 96, 175, 91);
                        bezierVertex(175, 91, 163, 89, 160, 80);
                        bezierVertex(160, 80, 159, 73, 153, 72);
                        bezierVertex(153, 72, 148, 70, 150, 63);
                        bezierVertex(150, 63, 154, 61, 158, 52);
                        bezierVertex(158, 52, 165, 45, 169, 47);
                        bezierVertex(169, 47, 178, 48, 188, 41);
                        bezierVertex(188, 41, 194, 38, 199, 43);
                        bezierVertex(199, 43, 203, 51, 204, 57);
                        bezierVertex(204, 57, 215, 69, 221, 71);
                        bezierVertex(221, 71, 232, 70, 230, 75);
                        bezierVertex(230, 75, 236, 96, 246, 99);
                        bezierVertex(247, 99, 248, 98, 248, 105);
                        bezierVertex(248, 105, 252, 105, 256, 110);
                        bezierVertex(256, 110, 267, 110, 272, 115);
                        bezierVertex(272, 115, 282, 115, 277, 119);
                        bezierVertex(277, 119, 268, 121, 259, 129);
                        bezierVertex(259, 129, 256, 131, 249, 129);
                        bezierVertex(249, 129, 238, 126, 235, 126);
                        bezierVertex(235, 126, 232, 124, 223, 113);
                        bezierVertex(223, 113, 228, 113, 232, 108);
                        bezierVertex(233, 109, 238, 110, 244, 114);
                        bezierVertex(244, 114, 251, 115, 254, 120);
                        bezierVertex(254, 120, 258, 120, 262, 120);
                        bezierVertex(262, 120, 254, 115, 251, 113);
                        bezierVertex(251, 113, 245, 112, 243, 109);
                        bezierVertex(243, 109, 241, 108, 238, 105);
                        bezierVertex(238, 105, 230, 101, 222, 106);
                        bezierVertex(222, 106, 208, 112, 205, 111);
                        bezierVertex(205, 111, 199, 115, 184, 115);
                        bezierVertex(184, 115, 171, 122, 163, 120);
                        bezierVertex(163, 120, 164, 117, 167, 116);
                        bezierVertex(167, 116, 162, 115, 158, 121);
                        bezierVertex(158, 121, 153, 123, 147, 121);
                        bezierVertex(147, 121, 144, 115, 130, 114);
                        bezierVertex(130, 114, 116, 113, 110, 113);
                        bezierVertex(110, 113, 105, 107, 101, 112);
                        bezierVertex(101, 112, 107, 112, 107, 114);
                        bezierVertex(107, 114, 108, 120, 94, 123);
                        bezierVertex(94, 123, 89, 123, 81, 118);
                        bezierVertex(81, 118, 76, 115, 75, 114);
                        bezierVertex(75, 114, 76, 110, 77, 107);
                        bezierVertex(77, 107, 78, 105, 76, 104);
                        endShape();
                        
                        // Lightest dirt layer
                        fill(164, 114, 99);
                        beginShape();
                        vertex(62, 90);
                        bezierVertex(62, 90, 67, 81, 74, 77);
                        bezierVertex(74, 77, 77, 76, 82, 78);
                        bezierVertex(82, 78, 89, 82, 82, 82);
                        bezierVertex(82, 82, 73, 81, 68, 87);
                        bezierVertex(64, 89, 63, 90, 63, 90);
                        endShape();
                        
                        beginShape();
                        vertex(89, 101);
                        bezierVertex(89, 101, 94, 91, 104, 96);
                        bezierVertex(104, 96, 110, 98, 112, 97);
                        bezierVertex(112, 97, 105, 101, 99, 98);
                        bezierVertex(99, 98, 93, 96, 90, 101);
                        endShape();
                        
                        beginShape();
                        vertex(116, 97);
                        bezierVertex(116, 97, 117, 100, 123, 97);
                        bezierVertex(123, 97, 120, 96, 115, 97);
                        endShape();
                        
                        beginShape();
                        vertex(139, 36);
                        bezierVertex(139, 36, 142, 28, 152, 27);
                        bezierVertex(152, 27, 152, 30, 148, 30);
                        bezierVertex(148, 30, 143, 32, 140, 36);
                        endShape();
                        
                        beginShape();
                        vertex(191, 52);
                        bezierVertex(191, 52, 182, 43, 174, 49);
                        bezierVertex(174, 49, 170, 53, 160, 56);
                        bezierVertex(160, 56, 160, 59, 170, 59);
                        bezierVertex(170, 59, 175, 58, 178, 55);
                        bezierVertex(178, 55, 182, 53, 190, 53);
                        endShape();
                        
                        beginShape();
                        vertex(179, 25);
                        bezierVertex(179, 25, 201, 18, 208, 28);
                        bezierVertex(208, 28, 214, 33, 212, 39);
                        bezierVertex(212, 39, 215, 44, 214, 47);
                        bezierVertex(212, 39, 209, 39, 209, 39);
                        bezierVertex(202, 37, 202, 32, 202, 32);
                        bezierVertex(194, 27, 181, 26, 181, 26);
                        endShape();
                        
                        beginShape();
                        vertex(220, 49);
                        bezierVertex(220, 49, 214, 45, 220, 54);
                        bezierVertex(220, 54, 228, 59, 228, 56);
                        bezierVertex(228, 56, 225, 55, 220, 49);
                        endShape();
                        
                        beginShape();
                        vertex(239, 65);
                        bezierVertex(239, 65, 245, 62, 250, 70);
                        bezierVertex(250, 70, 245, 68, 239, 65);
                        endShape();
                        
                        beginShape();
                        vertex(237, 113);
                        bezierVertex(237, 113, 229, 111, 236, 115);
                        bezierVertex(236, 115, 239, 116, 244, 120);
                        bezierVertex(244, 120, 249, 124, 243, 116);
                        bezierVertex(243, 116, 241, 114, 237, 112);
                        endShape();	
                        popMatrix();
                        
			            pushMatrix();
			            translate(119, 68);
			            scale(0.3);
			            rotate(10);
			            
			            // pumpkin
                        noStroke();
                        fill(255, 140, 0);
                        beginShape();
                        vertex(181, 101);
                        bezierVertex(150, 83, 99, 108, 99, 108);
                        bezierVertex(36, 119, 13, 193, 13, 193);
                        bezierVertex(3, 226, 1, 254, 1, 254);
                        bezierVertex(4, 330, 52, 366, 52, 366);
                        bezierVertex(93, 410, 112, 404, 112, 404);
                        bezierVertex(150, 435, 190, 419, 190, 419);
                        bezierVertex(224, 441, 252, 422, 252, 422);
                        bezierVertex(321, 424, 353, 384, 353, 384);
                        bezierVertex(391, 371, 416, 324, 416, 324);
                        bezierVertex(455, 230, 400, 142, 400, 142);
                        bezierVertex(380, 119, 353, 119, 353, 119);
                        bezierVertex(332, 102, 310, 109, 310, 109);
                        bezierVertex(274, 83, 239, 103, 239, 103);
                        bezierVertex(202, 91, 181, 101, 181, 101);
                        endShape();
                        
                        // lighting
                        fill(255, 164, 0);
                        beginShape();
                        vertex(94, 116);
                        bezierVertex(94, 116, 30, 118, 7, 223);
                        bezierVertex(7, 223, 3, 248, 5, 275);
                        bezierVertex(5, 275, 10, 301, 14, 310);
                        bezierVertex(14, 310, 11, 214, 68, 138);
                        bezierVertex(68, 138, 91, 120, 94, 117);
                        endShape();
                        
                        beginShape();
                        vertex(131, 156);
                        bezierVertex(131, 156, 171, 121, 126, 124);
                        bezierVertex(126, 124, 55, 131, 28, 235);
                        bezierVertex(28, 235, 9, 321, 51, 363);
                        bezierVertex(51, 363, 91, 412, 89, 378);
                        bezierVertex(89, 378, 73, 241, 108, 188);
                        bezierVertex(108, 188, 122, 165, 133, 154);
                        endShape();
                        
                        beginShape();
                        vertex(205, 187);
                        bezierVertex(205, 187, 204, 126, 179, 136);
                        bezierVertex(179, 136, 134, 150, 110, 207);
                        bezierVertex(110, 207, 70, 300, 106, 390);
                        bezierVertex(106, 390, 131, 438, 165, 401);
                        bezierVertex(165, 401, 176, 373, 205, 187);
                        endShape();
                        
                        beginShape();
                        vertex(274, 205);
                        bezierVertex(274, 205, 268, 152, 255, 143);
                        bezierVertex(255, 143, 228, 135, 215, 188);
                        bezierVertex(215, 188, 198, 323, 188, 385);
                        bezierVertex(188, 385, 183, 448, 234, 416);
                        bezierVertex(234, 416, 259, 400, 267, 343);
                        bezierVertex(267, 343, 273, 243, 273, 205);
                        endShape();
                        
                        beginShape();
                        vertex(262, 151);
                        bezierVertex(262, 151, 325, 107, 360, 161);
                        bezierVertex(360, 161, 418, 247, 375, 347);
                        bezierVertex(375, 347, 362, 375, 339, 392);
                        bezierVertex(339, 392, 299, 419, 253, 419);
                        bezierVertex(253, 419, 284, 391, 285, 239);
                        bezierVertex(285, 239, 276, 162, 263, 150);
                        endShape();
                        
                        beginShape();
                        vertex(385, 132);
                        bezierVertex(355, 107, 351, 123, 351, 123);
                        bezierVertex(365, 159, 391, 202, 391, 202);
                        bezierVertex(420, 276, 393, 337, 393, 337);
                        bezierVertex(383, 364, 411, 334, 411, 334);
                        bezierVertex(464, 217, 383, 129, 383, 129);
                        endShape();
                        
                        fill(140, 98, 0);
                        beginShape();
                        vertex(182, 137);
                        bezierVertex(182, 137, 218, 133, 218, 170);
                        bezierVertex(218, 170, 236, 133, 253, 147);
                        bezierVertex(253, 147, 262, 154, 262, 154);
                        bezierVertex(262, 154, 271, 146, 275, 143);
                        bezierVertex(275, 143, 231, 113, 251, 75);
                        bezierVertex(251, 75, 254, 59, 223, 44);
                        bezierVertex(223, 44, 215, 42, 213, 50);
                        bezierVertex(213, 51, 215, 117, 190, 133);
                        bezierVertex(190, 133, 184, 137, 182, 138);
                        endShape();
                        
                        fill(255, 212, 138);
                        beginShape();
                        vertex(131, 210);
                        bezierVertex(131, 210, 151, 174, 177, 198);
                        bezierVertex(177, 198, 157, 200, 159, 221);
                        bezierVertex(159, 221, 161, 238, 175, 237);
                        bezierVertex(175, 237, 186, 238, 188, 234);
                        bezierVertex(188, 234, 190, 255, 190, 258);
                        bezierVertex(190, 258, 179, 252, 155, 244);
                        bezierVertex(155, 244, 138, 226, 131, 210);
                        endShape();
                        
                        fill(16, 10, 56);
                        beginShape();
                        vertex(164, 196);
                        bezierVertex(164, 196, 140, 187, 129, 215);
                        bezierVertex(129, 215, 124, 234, 132, 258);
                        bezierVertex(132, 258, 149, 250, 183, 254);
                        bezierVertex(183, 254, 185, 236, 185, 236);
                        bezierVertex(171, 245, 158, 234, 158, 234);
                        bezierVertex(147, 218, 153, 207, 153, 207);
                        bezierVertex(156, 203, 163, 196, 163, 196);
                        endShape();
                        
                        fill(255, 212, 138);
                        beginShape();
                        vertex(226, 261);
                        bezierVertex(226, 261, 234, 254, 242, 259);
                        bezierVertex(242, 259, 258, 276, 266, 286);
                        bezierVertex(266, 286, 250, 279, 224, 263);
                        bezierVertex(224, 263, 225, 260, 236, 258);
                        endShape();
                        
                        beginShape();
                        vertex(294, 209);
                        bezierVertex(294, 209, 305, 187, 319, 189);
                        bezierVertex(319, 189, 333, 188, 341, 199);
                        bezierVertex(341, 199, 324, 199, 321, 218);
                        bezierVertex(321, 218, 322, 240, 340, 237);
                        bezierVertex(340, 237, 344, 237, 352, 234);
                        bezierVertex(352, 234, 351, 246, 350, 257);
                        bezierVertex(350, 257, 341, 253, 296, 222);
                        bezierVertex(296, 221, 295, 211, 295, 211);
                        endShape();
                        
                        beginShape();
                        vertex(230, 310);
                        bezierVertex(230, 310, 263, 309, 264, 342);
                        bezierVertex(264, 342, 261, 376, 224, 367);
                        bezierVertex(224, 367, 225, 316, 231, 311);
                        endShape();
                        
                        fill(16, 10, 56);
                        beginShape();
                        vertex(294, 257);
                        bezierVertex(294, 257, 284, 233, 294, 207);
                        bezierVertex(294, 207, 306, 188, 326, 196);
                        bezierVertex(326, 196, 312, 204, 314, 220);
                        bezierVertex(314, 220, 316, 235, 328, 238);
                        bezierVertex(328, 238, 336, 240, 345, 236);
                        bezierVertex(345, 236, 345, 243, 344, 254);
                        bezierVertex(344, 254, 316, 251, 294, 257);
                        endShape();
                        
                        beginShape();
                        vertex(205, 284);
                        bezierVertex(225, 259, 228, 261, 228, 261);
                        bezierVertex(235, 260, 241, 265, 241, 265);
                        bezierVertex(253, 276, 257, 283, 257, 283);
                        bezierVertex(239, 274, 223, 279, 223, 279);
                        bezierVertex(211, 283, 204, 284, 204, 284);
                        endShape();
                        
                        ellipse(231, 339, 50, 57);
                        popMatrix();
			        },
			    
			    }, 
			    
			    blessed: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {


                        pushMatrix();
                        translate(5, -75);
                        rotate(10);
                        noStroke();
                        for (var i = 0; i <= 1; i += 0.01) {
                            fill(lerpColor(color(255, 255, 0, 0), color(255, 255, 0, 255), pow(i, 3)));
                            
                            ellipse(200, 200, 260 * (1 - i), 220 * (1 - i));
                        }
                        popMatrix();

			            pushMatrix();
			            translate(0, 190);
			            scale(1, 0.3);
			            
                        // dark dirt layer
                        noStroke();
                        fill(96, 56, 56);
                        beginShape();
                        vertex(18, 114);
                        bezierVertex(18, 114, 22, 114, 25, 111);
                        bezierVertex(25, 111, 28, 109, 34, 109);
                        bezierVertex(34, 109, 37, 109, 43, 103);
                        bezierVertex(43, 103, 45, 101, 50, 98);
                        bezierVertex(50, 98, 67, 99, 95, 83);
                        bezierVertex(95, 83, 111, 67, 111, 67);
                        bezierVertex(121, 67, 122, 60, 122, 60);
                        bezierVertex(124, 52, 127, 47, 127, 47);
                        bezierVertex(129, 43, 132, 35, 132, 35);
                        bezierVertex(148, 46, 152, 22, 152, 22);
                        bezierVertex(157, 22, 162, 24, 162, 24);
                        bezierVertex(167, 25, 171, 22, 171, 22);
                        bezierVertex(179, 19, 184, 17, 184, 17);
                        bezierVertex(197, 19, 222, 47, 222, 47);
                        bezierVertex(231, 54, 237, 56, 237, 56);
                        bezierVertex(249, 71, 260, 79, 260, 79);
                        bezierVertex(266, 90, 272, 92, 272, 92);
                        bezierVertex(275, 92, 277, 95, 277, 95);
                        bezierVertex(292, 108, 293, 108, 293, 108);
                        bezierVertex(306, 118, 314, 121, 314, 121);
                        bezierVertex(316, 124, 310, 123, 310, 123);
                        bezierVertex(304, 125, 299, 127, 286, 127);
                        bezierVertex(286, 127, 282, 127, 269, 131);
                        bezierVertex(269, 131, 256, 145, 237, 132);
                        bezierVertex(237, 132, 234, 130, 228, 129);
                        bezierVertex(228, 129, 218, 114, 210, 120);
                        bezierVertex(210, 120, 199, 126, 187, 122);
                        bezierVertex(187, 122, 181, 119, 175, 125);
                        bezierVertex(175, 125, 170, 130, 165, 129);
                        bezierVertex(165, 129, 160, 131, 152, 131);
                        bezierVertex(152, 131, 149, 129, 144, 125);
                        bezierVertex(144, 125, 140, 121, 131, 124);
                        bezierVertex(131, 124, 126, 123, 120, 122);
                        bezierVertex(120, 122, 112, 117, 105, 122);
                        bezierVertex(105, 122, 97, 133, 85, 129);
                        bezierVertex(85, 129, 79, 126, 77, 122);
                        bezierVertex(77, 122, 75, 119, 69, 121);
                        bezierVertex(69, 121, 59, 123, 44, 120);
                        bezierVertex(44, 120, 39, 115, 28, 116);
                        bezierVertex(28, 116, 23, 116, 18, 114);
                        endShape();
                        
                        // lighter dirt layer
                        fill(127, 84, 68);
                        beginShape();
                        vertex(77, 103);
                        bezierVertex(77, 103, 70, 115, 62, 116);
                        bezierVertex(62, 116, 38, 109, 45, 103);
                        bezierVertex(45, 103, 49, 98, 54, 92);
                        bezierVertex(54, 92, 61, 79, 71, 73);
                        bezierVertex(71, 73, 78, 68, 85, 72);
                        bezierVertex(85, 72, 95, 78, 101, 72);
                        bezierVertex(101, 72, 107, 67, 112, 68);
                        bezierVertex(112, 68, 123, 70, 123, 67);
                        bezierVertex(123, 67, 128, 64, 134, 60);
                        bezierVertex(141, 55, 132, 57, 132, 57);
                        bezierVertex(129, 58, 129, 51, 129, 51);
                        bezierVertex(132, 46, 132, 35, 132, 35);
                        bezierVertex(146, 21, 152, 22, 152, 22);
                        bezierVertex(157, 23, 160, 30, 160, 30);
                        bezierVertex(161, 34, 170, 36, 170, 36);
                        bezierVertex(176, 37, 179, 35, 179, 35);
                        bezierVertex(182, 34, 175, 33, 175, 33);
                        bezierVertex(168, 33, 172, 26, 172, 26);
                        bezierVertex(174, 23, 186, 17, 186, 17);
                        bezierVertex(194, 14, 201, 21, 207, 23);
                        bezierVertex(207, 23, 218, 27, 218, 36);
                        bezierVertex(218, 36, 219, 45, 223, 48);
                        bezierVertex(223, 48, 221, 49, 225, 53);
                        bezierVertex(225, 53, 231, 56, 232, 59);
                        bezierVertex(232, 59, 232, 67, 235, 69);
                        bezierVertex(235, 69, 236, 76, 239, 81);
                        bezierVertex(239, 81, 241, 82, 238, 72);
                        bezierVertex(238, 72, 238, 68, 236, 67);
                        bezierVertex(236, 67, 236, 62, 236, 55);
                        bezierVertex(236, 55, 251, 59, 252, 63);
                        bezierVertex(252, 63, 260, 79, 263, 87);
                        bezierVertex(263, 87, 261, 95, 266, 95);
                        bezierVertex(266, 95, 268, 95, 270, 99);
                        bezierVertex(270, 99, 272, 101, 275, 100);
                        bezierVertex(275, 100, 277, 104, 282, 108);
                        bezierVertex(282, 107, 281, 105, 281, 105);
                        bezierVertex(277, 102, 276, 97, 276, 97);
                        bezierVertex(275, 97, 275, 92, 275, 92);
                        bezierVertex(285, 96, 290, 102, 290, 102);
                        bezierVertex(292, 109, 297, 115, 297, 115);
                        bezierVertex(303, 119, 297, 119, 297, 119);
                        bezierVertex(291, 119, 288, 121, 288, 121);
                        bezierVertex(282, 112, 273, 105, 273, 105);
                        bezierVertex(266, 103, 255, 103, 255, 103);
                        bezierVertex(252, 101, 251, 97, 251, 97);
                        bezierVertex(244, 92, 243, 89, 243, 89);
                        bezierVertex(238, 87, 236, 83, 236, 83);
                        bezierVertex(234, 77, 234, 72, 234, 72);
                        bezierVertex(232, 67, 226, 67, 226, 67);
                        bezierVertex(225, 66, 220, 59, 220, 59);
                        bezierVertex(215, 55, 214, 55, 214, 55);
                        bezierVertex(208, 40, 202, 39, 202, 39);
                        bezierVertex(197, 34, 184, 38, 184, 38);
                        bezierVertex(173, 43, 168, 40, 168, 40);
                        bezierVertex(164, 37, 155, 43, 155, 43);
                        bezierVertex(145, 53, 139, 63, 139, 63);
                        bezierVertex(136, 65, 133, 67, 133, 67);
                        bezierVertex(130, 65, 125, 73, 125, 73);
                        bezierVertex(119, 85, 114, 87, 114, 87);
                        bezierVertex(110, 86, 102, 85, 102, 85);
                        bezierVertex(91, 83, 83, 97, 83, 97);
                        bezierVertex(84, 99, 86, 96, 86, 96);
                        bezierVertex(93, 90, 98, 91, 98, 91);
                        bezierVertex(108, 94, 116, 93, 116, 93);
                        bezierVertex(122, 89, 130, 83, 132, 85);
                        bezierVertex(132, 85, 136, 87, 141, 91);
                        bezierVertex(141, 91, 154, 93, 155, 95);
                        bezierVertex(155, 95, 163, 100, 166, 104);
                        bezierVertex(166, 104, 182, 110, 190, 111);
                        bezierVertex(190, 111, 195, 110, 205, 105);
                        bezierVertex(205, 105, 193, 106, 190, 105);
                        bezierVertex(190, 105, 180, 96, 175, 91);
                        bezierVertex(175, 91, 163, 89, 160, 80);
                        bezierVertex(160, 80, 159, 73, 153, 72);
                        bezierVertex(153, 72, 148, 70, 150, 63);
                        bezierVertex(150, 63, 154, 61, 158, 52);
                        bezierVertex(158, 52, 165, 45, 169, 47);
                        bezierVertex(169, 47, 178, 48, 188, 41);
                        bezierVertex(188, 41, 194, 38, 199, 43);
                        bezierVertex(199, 43, 203, 51, 204, 57);
                        bezierVertex(204, 57, 215, 69, 221, 71);
                        bezierVertex(221, 71, 232, 70, 230, 75);
                        bezierVertex(230, 75, 236, 96, 246, 99);
                        bezierVertex(247, 99, 248, 98, 248, 105);
                        bezierVertex(248, 105, 252, 105, 256, 110);
                        bezierVertex(256, 110, 267, 110, 272, 115);
                        bezierVertex(272, 115, 282, 115, 277, 119);
                        bezierVertex(277, 119, 268, 121, 259, 129);
                        bezierVertex(259, 129, 256, 131, 249, 129);
                        bezierVertex(249, 129, 238, 126, 235, 126);
                        bezierVertex(235, 126, 232, 124, 223, 113);
                        bezierVertex(223, 113, 228, 113, 232, 108);
                        bezierVertex(233, 109, 238, 110, 244, 114);
                        bezierVertex(244, 114, 251, 115, 254, 120);
                        bezierVertex(254, 120, 258, 120, 262, 120);
                        bezierVertex(262, 120, 254, 115, 251, 113);
                        bezierVertex(251, 113, 245, 112, 243, 109);
                        bezierVertex(243, 109, 241, 108, 238, 105);
                        bezierVertex(238, 105, 230, 101, 222, 106);
                        bezierVertex(222, 106, 208, 112, 205, 111);
                        bezierVertex(205, 111, 199, 115, 184, 115);
                        bezierVertex(184, 115, 171, 122, 163, 120);
                        bezierVertex(163, 120, 164, 117, 167, 116);
                        bezierVertex(167, 116, 162, 115, 158, 121);
                        bezierVertex(158, 121, 153, 123, 147, 121);
                        bezierVertex(147, 121, 144, 115, 130, 114);
                        bezierVertex(130, 114, 116, 113, 110, 113);
                        bezierVertex(110, 113, 105, 107, 101, 112);
                        bezierVertex(101, 112, 107, 112, 107, 114);
                        bezierVertex(107, 114, 108, 120, 94, 123);
                        bezierVertex(94, 123, 89, 123, 81, 118);
                        bezierVertex(81, 118, 76, 115, 75, 114);
                        bezierVertex(75, 114, 76, 110, 77, 107);
                        bezierVertex(77, 107, 78, 105, 76, 104);
                        endShape();
                        
                        // Lightest dirt layer
                        fill(164, 114, 99);
                        beginShape();
                        vertex(62, 90);
                        bezierVertex(62, 90, 67, 81, 74, 77);
                        bezierVertex(74, 77, 77, 76, 82, 78);
                        bezierVertex(82, 78, 89, 82, 82, 82);
                        bezierVertex(82, 82, 73, 81, 68, 87);
                        bezierVertex(64, 89, 63, 90, 63, 90);
                        endShape();
                        
                        beginShape();
                        vertex(89, 101);
                        bezierVertex(89, 101, 94, 91, 104, 96);
                        bezierVertex(104, 96, 110, 98, 112, 97);
                        bezierVertex(112, 97, 105, 101, 99, 98);
                        bezierVertex(99, 98, 93, 96, 90, 101);
                        endShape();
                        
                        beginShape();
                        vertex(116, 97);
                        bezierVertex(116, 97, 117, 100, 123, 97);
                        bezierVertex(123, 97, 120, 96, 115, 97);
                        endShape();
                        
                        beginShape();
                        vertex(139, 36);
                        bezierVertex(139, 36, 142, 28, 152, 27);
                        bezierVertex(152, 27, 152, 30, 148, 30);
                        bezierVertex(148, 30, 143, 32, 140, 36);
                        endShape();
                        
                        beginShape();
                        vertex(191, 52);
                        bezierVertex(191, 52, 182, 43, 174, 49);
                        bezierVertex(174, 49, 170, 53, 160, 56);
                        bezierVertex(160, 56, 160, 59, 170, 59);
                        bezierVertex(170, 59, 175, 58, 178, 55);
                        bezierVertex(178, 55, 182, 53, 190, 53);
                        endShape();
                        
                        beginShape();
                        vertex(179, 25);
                        bezierVertex(179, 25, 201, 18, 208, 28);
                        bezierVertex(208, 28, 214, 33, 212, 39);
                        bezierVertex(212, 39, 215, 44, 214, 47);
                        bezierVertex(212, 39, 209, 39, 209, 39);
                        bezierVertex(202, 37, 202, 32, 202, 32);
                        bezierVertex(194, 27, 181, 26, 181, 26);
                        endShape();
                        
                        beginShape();
                        vertex(220, 49);
                        bezierVertex(220, 49, 214, 45, 220, 54);
                        bezierVertex(220, 54, 228, 59, 228, 56);
                        bezierVertex(228, 56, 225, 55, 220, 49);
                        endShape();
                        
                        beginShape();
                        vertex(239, 65);
                        bezierVertex(239, 65, 245, 62, 250, 70);
                        bezierVertex(250, 70, 245, 68, 239, 65);
                        endShape();
                        
                        beginShape();
                        vertex(237, 113);
                        bezierVertex(237, 113, 229, 111, 236, 115);
                        bezierVertex(236, 115, 239, 116, 244, 120);
                        bezierVertex(244, 120, 249, 124, 243, 116);
                        bezierVertex(243, 116, 241, 114, 237, 112);
                        endShape();	
                        popMatrix();
                        
			            pushMatrix();
			            translate(119, 68);
			            scale(0.3);
			            rotate(10);
			            
			            // pumpkin
                        noStroke();
                        fill(255, 140, 0);
                        beginShape();
                        vertex(181, 101);
                        bezierVertex(150, 83, 99, 108, 99, 108);
                        bezierVertex(36, 119, 13, 193, 13, 193);
                        bezierVertex(3, 226, 1, 254, 1, 254);
                        bezierVertex(4, 330, 52, 366, 52, 366);
                        bezierVertex(93, 410, 112, 404, 112, 404);
                        bezierVertex(150, 435, 190, 419, 190, 419);
                        bezierVertex(224, 441, 252, 422, 252, 422);
                        bezierVertex(321, 424, 353, 384, 353, 384);
                        bezierVertex(391, 371, 416, 324, 416, 324);
                        bezierVertex(455, 230, 400, 142, 400, 142);
                        bezierVertex(380, 119, 353, 119, 353, 119);
                        bezierVertex(332, 102, 310, 109, 310, 109);
                        bezierVertex(274, 83, 239, 103, 239, 103);
                        bezierVertex(202, 91, 181, 101, 181, 101);
                        endShape();
                        
                        // lighting
                        fill(255, 164, 0);
                        beginShape();
                        vertex(94, 116);
                        bezierVertex(94, 116, 30, 118, 7, 223);
                        bezierVertex(7, 223, 3, 248, 5, 275);
                        bezierVertex(5, 275, 10, 301, 14, 310);
                        bezierVertex(14, 310, 11, 214, 68, 138);
                        bezierVertex(68, 138, 91, 120, 94, 117);
                        endShape();
                        
                        beginShape();
                        vertex(131, 156);
                        bezierVertex(131, 156, 171, 121, 126, 124);
                        bezierVertex(126, 124, 55, 131, 28, 235);
                        bezierVertex(28, 235, 9, 321, 51, 363);
                        bezierVertex(51, 363, 91, 412, 89, 378);
                        bezierVertex(89, 378, 73, 241, 108, 188);
                        bezierVertex(108, 188, 122, 165, 133, 154);
                        endShape();
                        
                        beginShape();
                        vertex(205, 187);
                        bezierVertex(205, 187, 204, 126, 179, 136);
                        bezierVertex(179, 136, 134, 150, 110, 207);
                        bezierVertex(110, 207, 70, 300, 106, 390);
                        bezierVertex(106, 390, 131, 438, 165, 401);
                        bezierVertex(165, 401, 176, 373, 205, 187);
                        endShape();
                        
                        beginShape();
                        vertex(274, 205);
                        bezierVertex(274, 205, 268, 152, 255, 143);
                        bezierVertex(255, 143, 228, 135, 215, 188);
                        bezierVertex(215, 188, 198, 323, 188, 385);
                        bezierVertex(188, 385, 183, 448, 234, 416);
                        bezierVertex(234, 416, 259, 400, 267, 343);
                        bezierVertex(267, 343, 273, 243, 273, 205);
                        endShape();
                        
                        beginShape();
                        vertex(262, 151);
                        bezierVertex(262, 151, 325, 107, 360, 161);
                        bezierVertex(360, 161, 418, 247, 375, 347);
                        bezierVertex(375, 347, 362, 375, 339, 392);
                        bezierVertex(339, 392, 299, 419, 253, 419);
                        bezierVertex(253, 419, 284, 391, 285, 239);
                        bezierVertex(285, 239, 276, 162, 263, 150);
                        endShape();
                        
                        beginShape();
                        vertex(385, 132);
                        bezierVertex(355, 107, 351, 123, 351, 123);
                        bezierVertex(365, 159, 391, 202, 391, 202);
                        bezierVertex(420, 276, 393, 337, 393, 337);
                        bezierVertex(383, 364, 411, 334, 411, 334);
                        bezierVertex(464, 217, 383, 129, 383, 129);
                        endShape();
                        
                        fill(140, 98, 0);
                        beginShape();
                        vertex(182, 137);
                        bezierVertex(182, 137, 218, 133, 218, 170);
                        bezierVertex(218, 170, 236, 133, 253, 147);
                        bezierVertex(253, 147, 262, 154, 262, 154);
                        bezierVertex(262, 154, 271, 146, 275, 143);
                        bezierVertex(275, 143, 231, 113, 251, 75);
                        bezierVertex(251, 75, 254, 59, 223, 44);
                        bezierVertex(223, 44, 215, 42, 213, 50);
                        bezierVertex(213, 51, 215, 117, 190, 133);
                        bezierVertex(190, 133, 184, 137, 182, 138);
                        endShape();
                        
                        fill(255, 212, 138);
                        beginShape();
                        vertex(131, 210);
                        bezierVertex(131, 210, 151, 174, 177, 198);
                        bezierVertex(177, 198, 157, 200, 159, 221);
                        bezierVertex(159, 221, 161, 238, 175, 237);
                        bezierVertex(175, 237, 186, 238, 188, 234);
                        bezierVertex(188, 234, 190, 255, 190, 258);
                        bezierVertex(190, 258, 179, 252, 155, 244);
                        bezierVertex(155, 244, 138, 226, 131, 210);
                        endShape();
                        
                        fill(238, 255, 0);
                        beginShape();
                        vertex(164, 196);
                        bezierVertex(164, 196, 140, 187, 129, 215);
                        bezierVertex(129, 215, 124, 234, 132, 258);
                        bezierVertex(132, 258, 149, 250, 183, 254);
                        bezierVertex(183, 254, 185, 236, 185, 236);
                        bezierVertex(171, 245, 158, 234, 158, 234);
                        bezierVertex(147, 218, 153, 207, 153, 207);
                        bezierVertex(156, 203, 163, 196, 163, 196);
                        endShape();
                        
                        fill(255, 212, 138);
                        beginShape();
                        vertex(226, 261);
                        bezierVertex(226, 261, 234, 254, 242, 259);
                        bezierVertex(242, 259, 258, 276, 266, 286);
                        bezierVertex(266, 286, 250, 279, 224, 263);
                        bezierVertex(224, 263, 225, 260, 236, 258);
                        endShape();
                        
                        beginShape();
                        vertex(294, 209);
                        bezierVertex(294, 209, 305, 187, 319, 189);
                        bezierVertex(319, 189, 333, 188, 341, 199);
                        bezierVertex(341, 199, 324, 199, 321, 218);
                        bezierVertex(321, 218, 322, 240, 340, 237);
                        bezierVertex(340, 237, 344, 237, 352, 234);
                        bezierVertex(352, 234, 351, 246, 350, 257);
                        bezierVertex(350, 257, 341, 253, 296, 222);
                        bezierVertex(296, 221, 295, 211, 295, 211);
                        endShape();
                        
                        beginShape();
                        vertex(230, 310);
                        bezierVertex(230, 310, 263, 309, 264, 342);
                        bezierVertex(264, 342, 261, 376, 224, 367);
                        bezierVertex(224, 367, 225, 316, 231, 311);
                        endShape();
                        
                        fill(255, 251, 0);
                        beginShape();
                        vertex(294, 257);
                        bezierVertex(294, 257, 284, 233, 294, 207);
                        bezierVertex(294, 207, 306, 188, 326, 196);
                        bezierVertex(326, 196, 312, 204, 314, 220);
                        bezierVertex(314, 220, 316, 235, 328, 238);
                        bezierVertex(328, 238, 336, 240, 345, 236);
                        bezierVertex(345, 236, 345, 243, 344, 254);
                        bezierVertex(344, 254, 316, 251, 294, 257);
                        endShape();
                        
                        beginShape();
                        vertex(205, 284);
                        bezierVertex(225, 259, 228, 261, 228, 261);
                        bezierVertex(235, 260, 241, 265, 241, 265);
                        bezierVertex(253, 276, 257, 283, 257, 283);
                        bezierVertex(239, 274, 223, 279, 223, 279);
                        bezierVertex(211, 283, 204, 284, 204, 284);
                        endShape();
                        
                        ellipse(231, 339, 50, 57);
                        popMatrix();




			        },
			    
			    },
			    
			    buttonDesign: {
			    
			        w: 600,
			        h: 600,
			        
			        d: function() {

                        noStroke();
                        fill(139, 190, 66);
                        beginShape();
                        vertex(101, 29);
                        bezierVertex(75, 29, 69, 41, 69, 41);
                        bezierVertex(65, 49, 67, 58, 67, 58);
                        bezierVertex(67, 56, 67, 64, 67, 64);
                        bezierVertex(68, 92, 67, 101, 67, 101);
                        bezierVertex(68, 132, 91, 135, 91, 135);
                        bezierVertex(130, 137, 301, 135, 301, 135);
                        bezierVertex(319, 133, 320, 115, 319, 115);
                        bezierVertex(310, 106, 311, 127, 319, 115);
                        bezierVertex(320, 68, 319, 42, 319, 42);
                        bezierVertex(310, 26, 295, 29, 295, 29);
                        bezierVertex(238, 29, 100, 29, 100, 29);
                        vertex(96, 37);
                        bezierVertex(96, 37, 171, 36, 300, 37);
                        bezierVertex(300, 37, 313, 39, 313, 55);
                        bezierVertex(313, 55, 313, 92, 312, 110);
                        bezierVertex(312, 110, 312, 125, 298, 128);
                        bezierVertex(298, 128, 233, 128, 88, 128);
                        bezierVertex(88, 128, 71, 125, 78, 104);
                        bezierVertex(78, 104, 77, 83, 78, 50);
                        bezierVertex(78, 50, 78, 35, 96, 37);
                        bezierVertex(98, 36, 98, 36, 96, 37);
                        vertex(117, 37);
                        endShape();
                        
                        fill(119, 166, 49);
                        beginShape();
                        vertex(84, 137);
                        bezierVertex(84, 137, 108, 152, 124, 146);
                        bezierVertex(124, 146, 127, 152, 130, 152);
                        bezierVertex(130, 152, 131, 146, 129, 143);
                        bezierVertex(129, 143, 135, 138, 138, 133);
                        bezierVertex(138, 133, 142, 135, 144, 132);
                        bezierVertex(144, 132, 142, 127, 139, 131);
                        bezierVertex(139, 131, 141, 118, 129, 112);
                        bezierVertex(129, 112, 112, 110, 109, 124);
                        bezierVertex(109, 124, 96, 113, 88, 119);
                        bezierVertex(88, 119, 93, 103, 70, 102);
                        bezierVertex(70, 102, 50, 100, 45, 91);
                        bezierVertex(45, 91, 41, 123, 63, 134);
                        bezierVertex(63, 134, 58, 141, 61, 148);
                        bezierVertex(61, 148, 64, 143, 75, 144);
                        bezierVertex(75, 144, 82, 144, 85, 137);
                        bezierVertex(85, 137, 92, 137, 93, 137);
                        bezierVertex(101, 135, 112, 127, 112, 127);
                        bezierVertex(115, 116, 126, 116, 126, 116);
                        bezierVertex(123, 121, 126, 121, 126, 121);
                        bezierVertex(131, 120, 129, 116, 129, 116);
                        bezierVertex(136, 118, 135, 129, 135, 129);
                        bezierVertex(135, 141, 117, 143, 117, 143);
                        bezierVertex(106, 143, 105, 142, 105, 142);
                        bezierVertex(108, 141, 106, 135, 106, 135);
                        bezierVertex(103, 138, 102, 143, 102, 143);
                        bezierVertex(94, 140, 90, 137, 90, 137);
                        endShape();
                        
                        fill(139, 190, 66);
                        beginShape();
                        vertex(62, 108);
                        bezierVertex(62, 108, 81, 115, 83, 130);
                        bezierVertex(83, 130, 71, 128, 67, 137);
                        bezierVertex(67, 137, 77, 129, 84, 132);
                        bezierVertex(84, 132, 85, 143, 71, 142);
                        bezierVertex(71, 142, 65, 142, 61, 146);
                        bezierVertex(61, 146, 64, 133, 69, 127);
                        bezierVertex(69, 127, 45, 123, 48, 96);
                        bezierVertex(48, 96, 62, 104, 71, 103);
                        bezierVertex(71, 103, 92, 103, 86, 120);
                        bezierVertex(86, 120, 98, 114, 107, 126);
                        bezierVertex(107, 126, 100, 138, 88, 133);
                        bezierVertex(87, 133, 86, 131, 86, 131);
                        bezierVertex(88, 121, 101, 125, 101, 125);
                        bezierVertex(97, 119, 86, 125, 86, 125);
                        bezierVertex(85, 128, 84, 127, 84, 127);
                        bezierVertex(80, 113, 62, 108, 62, 108);
                        endShape();
                        
                        fill(161, 207, 91);
                        beginShape();
                        vertex(62, 110);
                        bezierVertex(62, 110, 76, 112, 79, 124);
                        bezierVertex(79, 124, 63, 120, 63, 109);
                        endShape();
                        
                        beginShape();
                        vertex(71, 104);
                        bezierVertex(71, 104, 79, 112, 84, 111);
                        bezierVertex(84, 111, 82, 103, 73, 105);
                        endShape();
                        
                        fill(119, 166, 49);
                        beginShape();
                        vertex(281, 38);
                        bezierVertex(281, 38, 273, 45, 268, 39);
                        bezierVertex(268, 39, 272, 39, 271, 33);
                        bezierVertex(271, 33, 267, 34, 266, 37);
                        bezierVertex(266, 37, 265, 23, 276, 23);
                        bezierVertex(276, 23, 276, 27, 280, 30);
                        bezierVertex(280, 30, 282, 27, 279, 23);
                        bezierVertex(279, 23, 288, 24, 292, 28);
                        bezierVertex(292, 28, 296, 45, 305, 42);
                        bezierVertex(305, 42, 309, 52, 324, 47);
                        bezierVertex(324, 47, 321, 40, 318, 40);
                        bezierVertex(318, 40, 336, 32, 322, 10);
                        bezierVertex(322, 10, 318, 17, 313, 19);
                        bezierVertex(313, 19, 303, 22, 301, 30);
                        bezierVertex(301, 30, 297, 26, 294, 25);
                        bezierVertex(294, 25, 298, 22, 297, 17);
                        bezierVertex(297, 17, 292, 19, 292, 23);
                        bezierVertex(292, 23, 273, 15, 264, 26);
                        bezierVertex(264, 26, 259, 22, 256, 26);
                        bezierVertex(256, 26, 258, 31, 262, 31);
                        bezierVertex(262, 31, 262, 46, 277, 43);
                        bezierVertex(277, 43, 280, 42, 282, 37);
                        endShape();
                        
                        fill(139, 190, 66);
                        beginShape();
                        vertex(305, 39);
                        bezierVertex(299, 45, 295, 29, 295, 29);
                        bezierVertex(300, 29, 302, 33, 302, 33);
                        bezierVertex(307, 21, 315, 20, 315, 20);
                        bezierVertex(320, 19, 322, 13, 322, 13);
                        bezierVertex(330, 25, 323, 32, 323, 32);
                        bezierVertex(321, 35, 317, 38, 317, 38);
                        bezierVertex(322, 44, 322, 47, 322, 47);
                        bezierVertex(311, 49, 306, 40, 306, 40);
                        bezierVertex(313, 39, 316, 43, 316, 43);
                        bezierVertex(314, 38, 309, 37, 309, 37);
                        bezierVertex(314, 29, 318, 23, 318, 23);
                        bezierVertex(311, 28, 307, 36, 307, 36);
                        bezierVertex(303, 35, 300, 33, 300, 33);
                        bezierVertex(303, 37, 306, 37, 306, 37);
                        bezierVertex(305, 39, 305, 39, 305, 39);
                        endShape();
                        
                        fill(161, 207, 91);
                        beginShape();
                        vertex(315, 32);
                        bezierVertex(315, 32, 322, 30, 321, 23);
                        bezierVertex(321, 23, 316, 27, 315, 31);
                        endShape();



			        },
			    
			    },
			};
			
			//]
			
			/**====----[GLOBAL VARIABLES]----====**/
			//[ 
			
			var scene = "load";
			var sceneTo = "story";
			
			var click = false;
			var typed = false;
			
			var loaded = false;
			
			var curLoad = 0;
			
			var storyLines = [
                "It is the week of Halloween...",
                "For centuries, glowing pumpkins protected the valley...",
                "Their light keeps an ancient evil known as The Gloom away...",
                "But this year, the pumpkins are losing their glow...",
                "Each night the darkness grows stronger...",
                "If the Great Pumpkin Lantern falls, Halloween will be lost forever...",
                "You are the newest Pumpkin Keeper...",
                "Grow your patch. Defend the glowing pumpkins. Save halloween.",
                "Can you protect the patch from vanishing for good?",
            ];

			var positions = [
			    { x: 183, y: 80 },
			    { x: 350, y: 130 },
			    { x: 285, y: 180 },
			    { x: 373, y: 230 },
			    { x: 210, y: 300 },
			    { x: 310, y: 350 },
			    { x: 210, y: 400 },
			    { x: 320, y: 450 },
			    { x: 250, y: 500 },
			];
			
			var currentLine = 0;
			var textOpacity = 0;
			var textState = "fadeIn";
			var textTimer = 0;
			
			var titleTimer = 180;
			
			var keys = [];
			
			var Day = 1;
			var isDay = true;
			
			var coins = 0;
			var health = 100;
			var seeds = 5;
			
			var gameTimer = 0;
			
			var font = createFont("Jolly Lodger");
			var font2 = createFont("shadows into light");
			
			var lanternHealth = 100;
            var maxLanternHealth = 100;
			
			textFont(font);
			var player = {
                x: 300,
                y: 300,
                speed: 3
            };
            
            var lantern = {
                x: 300,
                y: 300,
                hp: 100
            };
			
			//]
			
			/**====----[INPUT SETTINGS]----====**/
			//[
			
			keyPressed = function() {
			    keys[keyCode] = true;
			};
			
			keyReleased = function() {
			    keys[keyCode] = false;
			};
			
			mouseClicked = function() {
			    click = true;
			};
			
			keyTyped = function() {
			    typed = true;
			};
			
			//]
			
			/**====----[LOADING]----====**/
			//[
			
			var load = function() {
			    
			    if (curLoad < Object.keys(imgs).length) {
			        
			        background(255, 0); 
			        
			        //create the img variable
			        var img = imgs[Object.keys(imgs)[curLoad]];
			        
			        pushStyle();
			        
			        //run the image as a function from imgs
			        img.d();
			        
			        popStyle();
			        
			        //get the object after its loaded
			        imgs[Object.keys(imgs)[curLoad]] = get(0, 0, img.w, img.h);
			        
			        //end the snapshot
			        background(0, 0, 0, 0);
			        
			        //add to curLoad so it loads the images
			        curLoad ++;
			        
			        if (curLoad >= Object.keys(imgs).length) {
			            
			            loaded = true;
			            
			        }
			        
			    }
			    
			    resetMatrix();
			    
			    background(0);
			    
			    fill(255);
			    textSize(32);
			    
			    text("loading", width / 2, height / 2.02);
			    
			    textSize(15);
			    text(curLoad + "/" + (Object.keys(imgs).length), width / 2, height / 1.84);
			    
			    noFill();
			    
			    strokeWeight(5);
			    stroke(255);
			
			    arc(width / 2, height / 2, 180, 180, 180, 180 + (curLoad / (Object.keys(imgs).length)) * 360);
			    
			    noStroke();
			    if (loaded) {
			        scene = sceneTo;
			    }
			    
			};
			
			//]
			
			/**====----[BUTTONS]----====**/
			// [
            var Button = function(x, y, txt) { 
                this.x = x; 
                this.y = y; 
                this.txt = txt; 
                this.scale = 1; 
                this.hitboxW = 140; 
                this.hitboxH = 57; 
            }; 
            
            Button.prototype.hover = function() { 
                var halfW = (this.hitboxW * this.scale) / 2; 
                var halfH = (this.hitboxH * this.scale) / 2; 
                return (mouseX > this.x - halfW && mouseX < this.x + halfW && mouseY > this.y - halfH && mouseY < this.y + halfH ); 

            }; 
            
            Button.prototype.draw = function() { 
                var targetScale = this.hover() ? 1.08 : 1; 
                this.scale += (targetScale - this.scale) * 0.12; 
                
                pushMatrix();
                translate(this.x, this.y);
                scale(this.scale);
                image(imgs.buttonDesign, 62, 127, 350, 350); 
                popMatrix(); 
                
                fill(255); 
                textSize(this.scale * 30); 
                text(this.txt, this.x, this.y - 2); 
            }; 
            
            Button.prototype.clicked = function() { 
                return click && this.hover(); 
            }; 
            
            var playBtn = new Button(175, 350, "PLAY"); 
            var howBtn = new Button(425, 350, "HOW");
            //]
			
			var Crop = function(x, y) {
                this.x = x;
                this.y = y;
            
                this.stage = 0;
            
                this.timer = 0;
            
                this.growthTimes = [
                    180, 
                    240,
                    300,
                    900 
                ];
            };
            Crop.prototype.update = function() {

                if(this.stage >= 4){
                    return;
                }
            
                this.timer++;
            
                if(this.timer >= this.growthTimes[this.stage]){
            
                    this.stage++;
                    this.timer = 0;
            
                }
            };
            
            Crop.prototype.draw = function() {
            
                switch(this.stage){
            
                    case 0:
                        image(imgs.dirtMound, this.x, this.y, 150, 150);
                    break;

                    case 1:
                        image(imgs.sprout, this.x, this.y, 150, 150);
                    break;
            
                    case 2:
                        image(imgs.pumpkin, this.x, this.y, 150, 150);
                    break;
            
                    case 3:
                        image(imgs.glow, this.x, this.y, 150, 150);
                    break;
            
                    case 4:
                        image(imgs.blessed, this.x, this.y, 150, 150);
                    break;
            
                }
                if(dist(mouseX, mouseY, this.x, this.y) < 40){
                
                    fill(255);
                
                    var names = [
                        "Seed",
                        "Sprout",
                        "Pumpkin",
                        "Glowing Pumpkin",
                        "Blessed Pumpkin"
                    ];
                
                    text(
                        names[this.stage],
                        this.x,
                        this.y - 45
                    );
                }
            
            };
            
            Crop.prototype.harvest = function() {
            
                if(this.stage === 3){
            
                    coins += 10;
            
                    return true;
                }
            
                if(this.stage === 4){
            
                    coins += 60;
            
                    return true;
                }
            
                return false;
            };
            
            var plots = [];
            
            for(var i = 0; i < positions.length; i++){
            
                plots.push({
                    x: positions[i].x,
                    y: positions[i].y,
                    crop: null
                });
            
            }
                        
            var plantCrop = function() {
            
                if(!keys[69] || seeds <= 0){
                    return;
                }
            
                for(var i = 0; i < plots.length; i++){
            
                    if(
                        dist(
                            player.x,
                            player.y,
                            plots[i].x,
                            plots[i].y
                        ) < 50
                    ){
            
                        if(plots[i].crop === null){
            
                            plots[i].crop = new Crop(
                                plots[i].x,
                                plots[i].y
                            );
            
                            seeds--;
            
                            break;
                        }
            
                    }
            
                }
            
            };            
            var harvestCrop = function() {
            
                if(!click){
                    return;
                }
            
                for(var i = 0; i < plots.length; i++){
            
                    var crop = plots[i].crop;
            
                    if(crop !== null){
            
                        if(
                            dist(
                                mouseX,
                                mouseY,
                                crop.x,
                                crop.y
                            ) < 40
                        ){
            
                            if(crop.harvest()){
            
                                plots[i].crop = null;
            
                                break;
            
                            }
                        }
                    }
                }
            };
			
			/**====----[STORY FUNCTION]----====**/
			//[
			
			var story = function() {
			
			    background(10, 10, 20);

			
			    if(currentLine < storyLines.length) {
			
			        switch(textState) {
			
			            case "fadeIn":
			
			                textOpacity += 255; // to 5
			
			                if(textOpacity >= 255) {
			                    textOpacity = 255;
			                    textState = "hold";
			                    textTimer = 60;
			                }
			
			            break;
			            
                    case "hold":
                        
                        textTimer = 0; // change to --
                        
                        if(textTimer <= 0) {
                            
                            if(currentLine === storyLines.length - 1) {
                                scene = "home"; 
                                
                            } else {
                                
                                textState = "fadeOut";
                                
                            }
                        }
                        break;
                        
                        case "fadeOut":
                        
                            textOpacity -= 255;// to 5
                        
                            if(textOpacity <= 0) {
                        
                                textOpacity = 0;
                        
                                currentLine++;
                        
                                if(currentLine >= storyLines.length) {
                                    scene = "home";
                                } else {
                                    textState = "fadeIn";
                                }
                        
                            }
                        
                        break;
			
			        }
			
			        fill(255, 255, 255, textOpacity);
			
			        textSize(28);
			
			        text(storyLines[currentLine], positions[currentLine].x, positions[currentLine].y);
			    }
			
			};
			
			//]
			
			/**====----[HOME FUNCTION]----====**/
			//[
			
            var home = function() {
            
                background(25, 15, 35);
            
                textFont(font);
            
                fill(255,140,0);
                textSize(64);
                text("The Pumpkin Keeper", 300, 180);
            
                textFont(font2);
            
                fill(255);
                textSize(24);
                text("A Light in the Dark", 300, 240);
            
                // progression showcase
            
/*                image(imgs.dirtMound, 115, 580, 150, 150);
                image(imgs.sprout, 211, 560, 150, 150);
                image(imgs.pumpkin, 311, 560, 150, 150);
                image(imgs.glow, 405, 560, 150, 150);
                image(imgs.blessed, 511, 560, 150, 150);
            

            
                fill(255);
                textSize(16);
                text("Seed", 80, 560);
                text("Sprout", 180, 560);
                text("Pumpkin", 280, 560);
                text("Glow", 380, 560);
                text("Blessed", 480, 560);*/
                playBtn.draw();
                howBtn.draw();
                
                if(playBtn.clicked()) {
                    scene = "game";
                }
                
                if(howBtn.clicked()) {
                    scene = "how";
                }
            };

			
			//]
			
			/**====----[GAME + HOW FUNCTION]----====**/
			//[
			var updatePlayer = function() {
            
                if(keys[87] || keys[UP]){
                    player.y -= player.speed;
                }
            
                if(keys[83] || keys[DOWN]){
                    player.y += player.speed;
                }
            
                if(keys[65] || keys[LEFT]){
                    player.x -= player.speed;
                }
            
                if(keys[68] || keys[RIGHT]){
                    player.x += player.speed;
                }
            
                player.x = constrain(player.x, 15, width - 15);
                player.y = constrain(player.y, 15, height - 15);
            };
            var drawPlayer = function(){
            
                fill(255);
                ellipse(player.x, player.y, 25, 25);
 
            
            };
            var game = function() {
            
                background(30, 40, 30);
            
                updatePlayer();
            
                plantCrop();
                harvestCrop();
                for(var i = 0; i < plots.length; i++){
                
                    // Empty plot
                    fill(90, 55, 25);
                    rectMode(CENTER);
                    rect(plots[i].x, plots[i].y, 60, 60);
                
                    fill(110, 70, 35);
                    rect(plots[i].x, plots[i].y, 50, 50);
                
                }
                for(var i = 0; i < plots.length; i++){
            
                    if(plots[i].crop !== null){
            
                        plots[i].crop.update();
                        plots[i].crop.draw();
            
                    }
            
                }
            
                drawPlayer();
            
                fill(255);
                textSize(20);
            
                text("Seeds: " + seeds, 60, 30);
                text("Coins: " + coins, 60, 55);
            
            };			
            var how = function() {
            			
            			    background(30, 40, 30);
            			
            			    fill(255);
            			    textSize(40);
            			    text("HOW COMING SOON", 300, 300);
            			
            			};
			
			//]
			
			/**====----[DRAW FUNCTION]----====**/
			//[
			
			draw = function() {
			
			    cursor(ARROW);
			
			    switch(scene) {
			
			        case "load":
			            load();
			        break;
			
			        case "story":
			            story();
			        break;
			
			        case "home":
			            home();
			        break;
			
			        case "game":
			            game();
			        break;
			        
			        case "how":
			            how();
			        break;	
			    }
			
			    click = false;
			    typed = false;
			    
			    if(playBtn.hover() || howBtn.hover()){
                    cursor(HAND);
                }
			};
			
			//]
		}
		
		runPJS(program);
		
		// Add reload button on KA --> <script>
		