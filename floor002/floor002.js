import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
import "@babylonjs/core/Particles/particleSystemComponent";
import "@babylonjs/core/Particles/webgl2ParticleSystem";
import {} from '@babylonjs/inspector';
import * as GUI from '@babylonjs/gui';

//OMITED: imageI, imageL, imageO, imageQ

import imageA from './src/assets/img/image001.jpg'
import imageB from './src/assets/img/image002.jpg'
import imageC from './src/assets/img/image003.jpg'
import imageD from './src/assets/img/image004.jpg'
import imageE from './src/assets/img/image005.jpg'
import imageF from './src/assets/img/image006.jpg'
import imageG from './src/assets/img/image007.jpg'
import imageH from './src/assets/img/image008.jpg'
import imageJ from './src/assets/img/image009.jpg'
import imageK from './src/assets/img/image010.jpg'
import imageM from './src/assets/img/image011.jpg'
import imageN from './src/assets/img/image012.jpg'
import imageP from './src/assets/img/image013.jpg'
import imageR from './src/assets/img/image014.jpg'
import imageS from './src/assets/img/image015.jpg'
import imageT from './src/assets/img/image016.jpg'
import imageU from './src/assets/img/image017.jpg'
import imageV from './src/assets/img/image018.jpg'
import imageW from './src/assets/img/image019.jpg'
import imageX from './src/assets/img/image020.jpg'
import imageY from './src/assets/img/image021.jpg'
import imageZ from './src/assets/img/image022.jpg'
import imageBA from './src/assets/img/image023.jpg'
import imageBB from './src/assets/img/image024.jpg'

import vike from './src/assets/img/cSU_Vikings.jpg'
import navigLegend from './src/assets/img/navigationLegend.jpg'

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function () {

    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
        "Camera",
        -Math.PI / 2,
        Math.PI / 2, 5,
        BABYLON.Vector3.Zero(),
        scene
    );

    camera.attachControl(canvas, true);
    camera.inputs.attached.mousewheel.detachControl(canvas);

    camera.fov = .96;

    let actualImage;

    function worldDome(img){
        
        return new BABYLON.PhotoDome(
            "sphere",
            img,
            {
                resolution: 64,
                size: 1000,
                useDirectMapping: false
            },
            scene
        );
    }

    switch (actualImage){
        case undefined:
            actualImage = imageF;
            break;
    }

    let dome = worldDome(actualImage);

    //***************************TargetA******************************//
    //North Button

    const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    const globeMarkerA = new BABYLON.Mesh("globeMarkerA", scene);
    //same as dome radius
    globeMarkerA.position = new BABYLON.Vector3(500, 0, 0);

    const targetA = GUI.Button.CreateImageWithCenterTextButton('targetA', 'N', vike);
        
        targetA.width = "50px";
        targetA.height = "50px";
        targetA.color = "Orange";
        targetA.thickness = 3;
        targetA.image.alpha = .70;
        targetA.fontSize = "30";

    targetA.onPointerUpObservable.add(() => {
        switch(actualImage){
            case imageA:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageB;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageB);
                break;
            case imageB:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageC;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageC);
                break;
            case imageD:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible //turn off East Button
                actualImage = imageE;
                targetD.isVisible = !targetD.isVisible //turn off South Button
                dome = worldDome(imageE);
                break;
            case imageE:
                dome.dispose();
                actualImage = imageF;
                dome = worldDome(imageF);
                break;
            case imageF:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageG;
                dome = worldDome(imageG);
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                break;
            case imageJ:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageK;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageK);
                break;
            case imageN:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageP;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageP);
                break;
            case imageK:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageM;
                dome = worldDome(imageM);
                break;
            case imageM:
                dome.dispose()
                actualImage = imageN;
                targetB.isVisible = !targetB.isVisible; //tunr on West Button
                dome = worldDome(imageN);
                break;
            case imageR:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageS;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageS);
                break;
            case imageS:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageT;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageT);
                break;
            case imageV:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageW;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageW);
                break;
            case imageW:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageX;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageX); 
                break;
            case imageX:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageY;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageY);
                break;
            case imageZ:
                dome.dispose();
                actualImage = imageBA;
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                dome = worldDome(imageBA);
                break;
            case imageBA:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageBB;
                dome = worldDome(imageBB);
                break;
        }
      
    });

    advancedTexture.addControl(targetA);
    targetA.linkWithMesh(globeMarkerA);

    //***************************TargetA******************************//

    //***************************TargetB******************************//
    //West Button

    const globeMarkerB = new BABYLON.Mesh("globeMarkerB", scene);
        //same as dome radius
        globeMarkerB.position = new BABYLON.Vector3(0, 0, 500);

        const targetB = GUI.Button.CreateImageWithCenterTextButton('targetB', 'W', vike);
        
        targetB.width = "50px";
        targetB.height = "50px";
        targetB.color = "Orange";
        targetB.thickness = 3;
        targetB.image.alpha = .70;
        targetB.fontSize = "30";

        targetB.onPointerUpObservable.add(() => {
            switch(actualImage){
                case imageG:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageA;
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    dome = worldDome(imageA);
                    break;
                case imageH:
                    dome.dispose();
                    actualImage = imageG;
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    dome = worldDome(imageG);
                    break;
                case imageJ:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageD;
                    dome = worldDome(imageD);
                    break;
                case imageN:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageH;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button 
                    dome = worldDome(imageH);
                    break;
                case imageR:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible //turn off West Button
                    actualImage = imageK;
                    targetD.isVisible = !targetD.isVisible //turn on South Button
                    dome = worldDome(imageK)
                    break;
                case imageT:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageP;
                    dome = worldDome(imageP);
                    break;
                case imageU:
                    dome.dispose()
                    targetB.isVisible = !targetB.isVisible; //turn off North Button
                    actualImage = imageC;
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    dome = worldDome(imageC);
                    break;
                case imageW:
                    dome.dispose();
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageR;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageR);
                    break;
                case imageV:
                    dome.dispose();
                    actualImage = imageJ;
                    dome = worldDome(imageJ);
                    break;
                case imageY:
                    dome.dispose();
                    targetC.isVisible = !targetC.isVisible; //turn off East Button
                    actualImage = imageT;
                    dome = worldDome(imageT);
                    break;
                case imageZ:
                    dome.dispose();
                    actualImage = imageV;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageV);
                    break;
                case imageBA:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageX;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageX);
                    break;
                case imageBB:
                    dome.dispose();
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageU;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageU);
                    break;
                
            }
            
        });

        advancedTexture.addControl(targetB);
        targetB.linkWithMesh(globeMarkerB);

        switch(actualImage){
            case imageF:
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                break;
        }

    //***************************TargetB******************************//

    //***************************TargetC******************************//
    //East Button

    const globeMarkerC = new BABYLON.Mesh("globeMarkerC", scene);
    //same as dome radius
    globeMarkerC.position = new BABYLON.Vector3(0, 0, -500);

    const targetC = GUI.Button.CreateImageWithCenterTextButton('targetC', 'E', vike);
    
    targetC.width = "50px";
    targetC.height = "50px";
    targetC.color = "Orange";
    targetC.thickness = 3;
    targetC.image.alpha = .70;
    targetC.fontSize = "30";

    targetC.onPointerUpObservable.add(() => {
        switch(actualImage){
            case imageA:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageG;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageG);
                break;
            case imageC:
                dome.dispose()
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageU;
                targetB.isVisible = !targetB.isVisible; //turn on North Button
                dome = worldDome(imageU);
                break;
            case imageD:
                dome.dispose();
                actualImage = imageJ;
                targetB.isVisible = !targetB.isVisible; //turn on East Button
                dome = worldDome(imageJ);
                break;
            case imageG:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageH;
                dome = worldDome(imageH);
                break;
            case imageH:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button 
                actualImage = imageN;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageN);
                break;
            case imageJ:
                dome.dispose();
                actualImage = imageV;
                dome = worldDome(imageV);
                break;
            case imageK:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageR;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageR)
                break;
            case imageP:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageT;
                dome = worldDome(imageT);
                break;
            case imageR:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageW;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageW);
                break;
            case imageT:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageY;
                dome = worldDome(imageY);
                break;
            case imageU:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageBB;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageBB);
                break;
            case imageV:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageZ;
                dome = worldDome(imageZ);
                break;
            case imageX:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageBA;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageBA);
                break;
        }
       
    });

    advancedTexture.addControl(targetC);
    targetC.linkWithMesh(globeMarkerC);

    switch(actualImage){
        case imageF:
            targetC.isVisible = !targetC.isVisible; //turn off East Button
            break;
    }

    //***************************TargetC******************************//

    //***************************TargetD******************************//
    //South Button
    
    const globeMarkerD = new BABYLON.Mesh("globeMarkerD", scene);
    //same as dome radius
    globeMarkerD.position = new BABYLON.Vector3(-500,0,0);

    const targetD = GUI.Button.CreateImageWithCenterTextButton('targetD', 'S', vike);
    
    targetD.width = "50px";
    targetD.height = "50px";
    targetD.color = "Orange";
    targetD.thickness = 3;
    targetD.image.alpha = .70;
    targetD.fontSize = "30";

    targetD.onPointerUpObservable.add(() => {
        switch(actualImage){
            case imageB:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageA;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageA);
                break;
            case imageC:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageB;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageB);
                break;
            case imageE:
                dome.dispose()
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageD;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageD);
                break;
            case imageF:
                dome.dispose();
                actualImage = imageE;
                dome = worldDome(imageE);
                break;
            case imageG:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageF;
                dome = worldDome(imageF);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                break;
            case imageK:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageJ;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageJ);
                break;
            case imageM:
                dome.dispose();
                actualImage = imageK;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageK);
                break;
            case imageN:
                dome.dispose()
                targetB.isVisible = !targetB.isVisible; //tunr off West Button
                actualImage = imageM;
                dome = worldDome(imageM);
                break;
            case imageP:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageN;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageN);
                break;
            case imageS:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageR;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageR);
                break;
            case imageT:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageS;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageS);
                break;
            case imageW:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageV;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageV);
                break;
            case imageX:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageW;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageW); 
                break;
            case imageY:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageX;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetC.isVisible = !targetC.isVisible; //turn on East button
                dome = worldDome(imageX);
                break;
            case imageBA:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageZ;
                dome = worldDome(imageZ);
                break;
            case imageBB:
                dome.dispose();
                actualImage = imageBA;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageBA);
                break;
        }
      
    });
    
    advancedTexture.addControl(targetD);
    targetD.linkWithMesh(globeMarkerD);

    //***************************TargetD******************************//

    //***************************reset********************************//

    const reset = new BABYLON.Mesh("reset", scene);

    const resetTarget = GUI.Button.CreateImageWithCenterTextButton('resetTarget', "Reset");

    resetTarget.top = "-47%";
    resetTarget.left = "";
    resetTarget.fontSize = "1.5%";
    resetTarget.width = "8%";
    resetTarget.height = "6%";
    resetTarget.color = "Black";
    resetTarget.thickness = 2.5;
    resetTarget.background = "#F96161";

    resetTarget.onPointerUpObservable.add(() => {

        dome.dispose();
        actualImage = imageF;
        dome = worldDome(imageF);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = true;
                    break;
                case false:
                    targetA.isVisible = true;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = false;
                    break;
                case false:
                    targetB.isVisible = false;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = false;
                    break;
                case false:
                    targetC.isVisible = false;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = true;
                    break;
                case false:
                    targetD.isVisible = true;
                    break;
            }


    });
    
    advancedTexture.addControl(resetTarget);

    //***************************reset********************************//

    //***************************MathEmporium*************************//

    const mathEmporium = new BABYLON.Mesh("mathEmporium", scene);
    
    const targetMathEmporium = GUI.Button.CreateImageWithCenterTextButton('targetMathEmporium', "Math Emporium");
    
        targetMathEmporium.top = "-47%";
        targetMathEmporium.left = "45%";
        targetMathEmporium.fontSize = "1.5%";
        targetMathEmporium.width = "8%";
        targetMathEmporium.height = "6%";
        targetMathEmporium.color = "Black";
        targetMathEmporium.thickness = 2.5;
        targetMathEmporium.background = "#F96161";
    
        targetMathEmporium.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageD;
            dome = worldDome(imageD);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = true;
                    break;
                case false:
                    targetA.isVisible = true;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = false;
                    break;
                case false:
                    targetB.isVisible = false;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = true;
                    break;
                case false:
                    targetC.isVisible = true;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        })

        advancedTexture.addControl(targetMathEmporium);

    //***************************MathEmporium*************************//

    //***************************StudyWingA***************************//

    const studyWingA = new BABYLON.Mesh("studyWingA", scene);
    
    const targetStudyWingA = GUI.Button.CreateImageWithCenterTextButton('targetStudyWingA', "Styudy Wing A");
    
        targetStudyWingA.top = "-40%";
        targetStudyWingA.left = "45%";
        targetStudyWingA.fontSize = "1.5%";
        targetStudyWingA.width = "8%";
        targetStudyWingA.height = "6%";
        targetStudyWingA.color = "Black";
        targetStudyWingA.thickness = 2.5;
        targetStudyWingA.background = "#F96161";
    
        targetStudyWingA.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageJ;
            dome = worldDome(imageJ);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = true;
                    break;
                case false:
                    targetA.isVisible = true;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = true;
                    break;
                case false:
                    targetB.isVisible = true;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = true;
                    break;
                case false:
                    targetC.isVisible = true;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        })

        advancedTexture.addControl(targetStudyWingA);

    //***************************StudyWingA***************************//

    //***************************E-Learning/Center********************//

    const eLearningCntr = new BABYLON.Mesh("eLearningCntr", scene);
    
    const targetELearningCntr = GUI.Button.CreateImageWithCenterTextButton('targetELearningCntr', "E Learning Center");
    
        targetELearningCntr.top = "-33%";
        targetELearningCntr.left = "45%";
        targetELearningCntr.fontSize = "1.5%";
        targetELearningCntr.width = "8%";
        targetELearningCntr.height = "6%";
        targetELearningCntr.color = "Black";
        targetELearningCntr.thickness = 2.5;
        targetELearningCntr.background = "#F96161";
    
        targetELearningCntr.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageZ;
            dome = worldDome(imageZ);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = true;
                    break;
                case false:
                    targetA.isVisible = true;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = true;
                    break;
                case false:
                    targetB.isVisible = true;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = false;
                    break;
                case false:
                    targetC.isVisible = false;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }


        })

        advancedTexture.addControl(targetELearningCntr);

    //***************************E-Learning/Center********************//

    //***************************Stairs*******************************//
    const stairs = new BABYLON.Mesh("stairs", scene);
    
    const targetStairs = GUI.Button.CreateImageWithCenterTextButton('targetStairs', "Stairs");
    
        targetStairs.top = "-26%";
        targetStairs.left = "45%";
        targetStairs.fontSize = "1.5%";
        targetStairs.width = "8%";
        targetStairs.height = "6%";
        targetStairs.color = "Black";
        targetStairs.thickness = 2.5;
        targetStairs.background = "#F96161";
    
        targetStairs.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageH;
            dome = worldDome(imageH);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = false;
                    break;
                case false:
                    targetA.isVisible = false;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = true;
                    break;
                case false:
                    targetB.isVisible = true;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = true;
                    break;
                case false:
                    targetC.isVisible = true;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        })

        advancedTexture.addControl(targetStairs);
    //***************************Stairs*******************************//

    //***************************Men'sBathroom************************//
    const mensBathroom = new BABYLON.Mesh("mensBathroom", scene);
    
    const targetMensBathroom = GUI.Button.CreateImageWithCenterTextButton('targetMensBathroom', "Men's Bathroom");
    
        targetMensBathroom.top = "-19%";
        targetMensBathroom.left = "45%";
        targetMensBathroom.fontSize = "1.5%";
        targetMensBathroom.width = "8%";
        targetMensBathroom.height = "6%";
        targetMensBathroom.color = "Black";
        targetMensBathroom.thickness = 2.5;
        targetMensBathroom.background = "#F96161";
    
        targetMensBathroom.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageG;
            dome = worldDome(imageG);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = false;
                    break;
                case false:
                    targetA.isVisible = false;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = true;
                    break;
                case false:
                    targetB.isVisible = true;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = true;
                    break;
                case false:
                    targetC.isVisible = true;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = true;
                    break;
                case false:
                    targetD.isVisible = true;
                    break;
            }


        })

        advancedTexture.addControl(targetMensBathroom);
    //***************************Men'sBathroom************************//
    
    //***************************Women'sBathroom**********************//
    const womensBathroom = new BABYLON.Mesh("womensBathroom", scene);
    
    const targetWomensBathroom = GUI.Button.CreateImageWithCenterTextButton('targetWomensBathroom', "Women's Bathroom");
    
        targetWomensBathroom.top = "-12%";
        targetWomensBathroom.left = "45%";
        targetWomensBathroom.fontSize = "1.5%";
        targetWomensBathroom.width = "8%";
        targetWomensBathroom.height = "6%";
        targetWomensBathroom.color = "Black";
        targetWomensBathroom.thickness = 2.5;
        targetWomensBathroom.background = "#F96161";
    
        targetWomensBathroom.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageE;
            dome = worldDome(imageE);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = true;
                    break;
                case false:
                    targetA.isVisible = true;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = false;
                    break;
                case false:
                    targetB.isVisible = false;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = false;
                    break;
                case false:
                    targetC.isVisible = false;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = true;
                    break;
                case false:
                    targetD.isVisible = true;
                    break;
            }

            
        })

        advancedTexture.addControl(targetWomensBathroom);
    //***************************Women'sBathroom**********************//

    //***************************StudyWingB***************************//
    const studyWingB = new BABYLON.Mesh("studyWingB", scene);
    
    const targetStudyWingB = GUI.Button.CreateImageWithCenterTextButton('targetStudyWingB', "Study Wing B");
    
        targetStudyWingB.top = "-5%";
        targetStudyWingB.left = "45%";
        targetStudyWingB.fontSize = "1.5%";
        targetStudyWingB.width = "8%";
        targetStudyWingB.height = "6%";
        targetStudyWingB.color = "Black";
        targetStudyWingB.thickness = 2.5;
        targetStudyWingB.background = "#F96161";
    
        targetStudyWingB.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageC;
            dome = worldDome(imageC);

            switch(targetA.isVisible){
                case true:
                    targetA.isVisible = false;
                    break;
                case false:
                    targetA.isVisible = false;
                    break;
            }

            switch (targetB.isVisible){
                case true:
                    targetB.isVisible = false;
                    break;
                case false:
                    targetB.isVisible = false;
                    break;
            }

            switch (targetC.isVisible){
                case true:
                    targetC.isVisible = true;
                    break;
                case false:
                    targetC.isVisible = true;
                    break;
            }

            switch (targetD.isVisible){
                case true:
                    targetD.isVisible = true;
                    break;
                case false:
                    targetD.isVisible = true;
                    break;
            }


        })

        advancedTexture.addControl(targetStudyWingB);
    //***************************StudyWingB***************************//

    //***************************NavigationLegend*********************//
    const navLegend = new BABYLON.Mesh("navLegend", scene);
    
    const targetNavLegend = GUI.Button.CreateImageWithCenterTextButton('targetNavLegend', "", navigLegend);

    targetNavLegend.width = "20%";
    targetNavLegend.height = "28%";
    targetNavLegend.top = "34%";
    targetNavLegend.left = "";

    advancedTexture.addControl(targetNavLegend);
    //***************************NavigationLegend*********************//

    return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});

