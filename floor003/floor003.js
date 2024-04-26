import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
import "@babylonjs/core/Particles/particleSystemComponent";
import "@babylonjs/core/Particles/webgl2ParticleSystem";
import {} from '@babylonjs/inspector';
import * as GUI from '@babylonjs/gui';


import imageA from './src/assets/img/image001.jpg'
import imageB from './src/assets/img/image002.jpg'
import imageC from "./src/assets/img/image003.jpg"
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
            actualImage = imageD;
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
            case imageC:
                dome.dispose();
                actualImage = imageD;
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageD);
                break;
            case imageD:
                dome.dispose();
                actualImage = imageE;
                targetB.isVisible = !targetB.isVisible //turn on West Button
                targetC.isVisible = !targetC.isVisible //turn on East Button
                dome = worldDome(imageE);
                break;
            case imageE:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageF;
                dome = worldDome(imageF);
                break;
            case imageK:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetB.isVisible = !targetB.isVisible; //turn off West Button 
                actualImage = imageM;
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageM);
                break;
            case imageN:
                dome.dispose();
                actualImage = imageP;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageP);
                break;
            case imageP:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageR;
                dome = worldDome(imageR);
                break;
            case imageR:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageS;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageS);
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
                case imageB:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageA;
                    dome = worldDome(imageA);  
                    break;
                case imageE:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageB;
                    dome = worldDome(imageB);
                    break;
                case imageG:
                    dome.dispose();
                    actualImage = imageE;
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    dome = worldDome(imageE);
                    break;
                case imageH:
                    dome.dispose();
                    actualImage = imageG;
                    dome = worldDome(imageG);
                    break;
                case imageK:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageH;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageH);
                    break;
                case imageP:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageJ;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageJ);
                    break;
                case imageS:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageM;
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    dome = worldDome(imageM);
                    break;
            }
            
        });

        advancedTexture.addControl(targetB);
        targetB.linkWithMesh(globeMarkerB);

        switch(actualImage){
            case imageD:
                targetB.isVisible = !targetB.isVisible //turn off West Button
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
                actualImage = imageB;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageB);  
                break;
            case imageB:
                dome.dispose();
                actualImage = imageE;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageE);
                break;
            case imageE:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageG;
                dome = worldDome(imageG);
                break;
            case imageG:
                dome.dispose();
                actualImage = imageH;
                dome = worldDome(imageH);
                break;
            case imageH:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageK;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageK);
                break;
            case imageJ:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageP;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                dome = worldDome(imageP);
                break;
            case imageM:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageS;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageS);
                break;
            
        }
       
    });

    advancedTexture.addControl(targetC);
    targetC.linkWithMesh(globeMarkerC);

    switch(actualImage){
        case imageD:
            targetC.isVisible = !targetC.isVisible //turn off East Button
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
            case imageD:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageC;
                dome = worldDome(imageC);
                break;
            case imageE:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible //turn off West Button
                targetC.isVisible = !targetC.isVisible //turn off East Button
                actualImage = imageD;
                dome = worldDome(imageD);
                break;
            case imageF:
                dome.dispose();
                actualImage = imageE;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                dome = worldDome(imageE);
                break;
            case imageM:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageK;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //turn on West Button 
                dome = worldDome(imageK);
                break;
            case imageP:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageN;
                dome = worldDome(imageN);
                break;
            case imageR:
                dome.dispose();
                actualImage = imageP;
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                dome = worldDome(imageP);
                break;
            case imageS:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                actualImage = imageR;
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                dome = worldDome(imageR);
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

    //***************************Men'sBathroom************************//
    const mensBathroom = new BABYLON.Mesh("mensBathroom", scene);
    
    const targetMensBathroom = GUI.Button.CreateImageWithCenterTextButton('targetMensBathroom', "Men's Bathroom");
    
        targetMensBathroom.top = "-47%";
        targetMensBathroom.left = "45%";
        targetMensBathroom.fontSize = "1.5%";
        targetMensBathroom.width = "8%";
        targetMensBathroom.height = "6%";
        targetMensBathroom.color = "Black";
        targetMensBathroom.thickness = 2.5;
        targetMensBathroom.background = "#F96161";
    
        targetMensBathroom.onPointerUpObservable.add(() => {

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

        });

    advancedTexture.addControl(targetMensBathroom);
    //***************************Men'sBathroom************************//

    //***************************Women's Bathroom*********************//
    const womensBathroom = new BABYLON.Mesh("womensBathroom", scene);
    
    const targetWomensBathroom = GUI.Button.CreateImageWithCenterTextButton('targetWomensBathroom', "Women's Bathroom");
    
        targetWomensBathroom.top = "-40%";
        targetWomensBathroom.left = "45%";
        targetWomensBathroom.fontSize = "1.5%";
        targetWomensBathroom.width = "8%";
        targetWomensBathroom.height = "6%";
        targetWomensBathroom.color = "Black";
        targetWomensBathroom.thickness = 2.5;
        targetWomensBathroom.background = "#F96161";
    
        targetWomensBathroom.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageC;
            dome = worldDome(imageC);

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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        });

    advancedTexture.addControl(targetWomensBathroom);
    //***************************Women's Bathroom*********************//

    //***************************StudyWingA***************************//
    const studyWingA = new BABYLON.Mesh("studyWingA", scene);
    
    const targetStudyWingA = GUI.Button.CreateImageWithCenterTextButton('targetStudyWingA', "Study Wing A");
    
        targetStudyWingA.top = "-33%";
        targetStudyWingA.left = "45%";
        targetStudyWingA.fontSize = "1.5%";
        targetStudyWingA.width = "8%";
        targetStudyWingA.height = "6%";
        targetStudyWingA.color = "Black";
        targetStudyWingA.thickness = 2.5;
        targetStudyWingA.background = "#F96161";
    
        targetStudyWingA.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageF;
            dome = worldDome(imageF);

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

    advancedTexture.addControl(targetStudyWingA);
    //***************************StudyWingA***************************//

    //***************************Scanner/Archives*********************//
    const scannerArchives = new BABYLON.Mesh("scannerArchives", scene);
    
    const targetScannerArchives = GUI.Button.CreateImageWithCenterTextButton('targetScannerArchives', "Scanner / Archives");
    
        targetScannerArchives.top = "-26%";
        targetScannerArchives.left = "45%";
        targetScannerArchives.fontSize = "1.5%";
        targetScannerArchives.width = "8%";
        targetScannerArchives.height = "6%";
        targetScannerArchives.color = "Black";
        targetScannerArchives.thickness = 2.5;
        targetScannerArchives.background = "#F96161";
    
        targetScannerArchives.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageA;
            dome = worldDome(imageA);

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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        });

    advancedTexture.addControl(targetScannerArchives);
    //***************************Scanner/Archives*********************//

    //***************************Stairs*******************************//
    const stairs = new BABYLON.Mesh("stairs", scene);
    
    const targetStairs = GUI.Button.CreateImageWithCenterTextButton('targetStairs', "Stairs");
    
        targetStairs.top = "-19%";
        targetStairs.left = "45%";
        targetStairs.fontSize = "1.5%";
        targetStairs.width = "8%";
        targetStairs.height = "6%";
        targetStairs.color = "Black";
        targetStairs.thickness = 2.5;
        targetStairs.background = "#F96161";
    
        targetStairs.onPointerUpObservable.add(() => {

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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }


        });

    advancedTexture.addControl(targetStairs);
    //***************************Stairs*******************************//

    //***************************DDS/Scanner**************************//
    const ddsScanner = new BABYLON.Mesh("ddsScanner", scene);
    
    const targetDDSScanner = GUI.Button.CreateImageWithCenterTextButton('targetDDSScanner', "DDS Scanner");
    
        targetDDSScanner.top = "-12%";
        targetDDSScanner.left = "45%";
        targetDDSScanner.fontSize = "1.5%";
        targetDDSScanner.width = "8%";
        targetDDSScanner.height = "6%";
        targetDDSScanner.color = "Black";
        targetDDSScanner.thickness = 2.5;
        targetDDSScanner.background = "#F96161";
    
        targetDDSScanner.onPointerUpObservable.add(() => {

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


        });

    advancedTexture.addControl(targetDDSScanner);
    //***************************DDS/Scanner**************************//

    //***************************DDS/Desk*****************************//
    const ddsDesk = new BABYLON.Mesh("ddsDesk", scene);
    
    const targetDDSDesk = GUI.Button.CreateImageWithCenterTextButton('targetDDSDesk', "DDS Desk");
    
        targetDDSDesk.top = "-5%";
        targetDDSDesk.left = "45%";
        targetDDSDesk.fontSize = "1.5%";
        targetDDSDesk.width = "8%";
        targetDDSDesk.height = "6%";
        targetDDSDesk.color = "Black";
        targetDDSDesk.thickness = 2.5;
        targetDDSDesk.background = "#F96161";
    
        targetDDSDesk.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageK;
            dome = worldDome(imageK);

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

        });

    advancedTexture.addControl(targetDDSDesk);
    //***************************DDS/Desk*****************************//

    //***************************DDS/Computers************************//
    const ddsComputers = new BABYLON.Mesh("ddsComputers", scene);
    
    const targetDDSComputers = GUI.Button.CreateImageWithCenterTextButton('targetDDSComputers', "DDS Computers");
    
        targetDDSComputers.top = "2%";
        targetDDSComputers.left = "45%";
        targetDDSComputers.fontSize = "1.5%";
        targetDDSComputers.width = "8%";
        targetDDSComputers.height = "6%";
        targetDDSComputers.color = "Black";
        targetDDSComputers.thickness = 2.5;
        targetDDSComputers.background = "#F96161";
    
        targetDDSComputers.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageM;
            dome = worldDome(imageM);

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


        });

    advancedTexture.addControl(targetDDSComputers);
    //***************************DDS/Computers************************//

    //***************************CD/DVD/Media*************************//
    const cdDvdMedia = new BABYLON.Mesh("cdDvdMedia", scene);
    
    const targetCdDvDMedia = GUI.Button.CreateImageWithCenterTextButton('targetCdDvDMedia', "CD/DVD Media");
    
        targetCdDvDMedia.top = "9%";
        targetCdDvDMedia.left = "45%";
        targetCdDvDMedia.fontSize = "1.5%";
        targetCdDvDMedia.width = "8%";
        targetCdDvDMedia.height = "6%";
        targetCdDvDMedia.color = "Black";
        targetCdDvDMedia.thickness = 2.5;
        targetCdDvDMedia.background = "#F96161";
    
        targetCdDvDMedia.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageJ;
            dome = worldDome(imageJ);

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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }


        });

    advancedTexture.addControl(targetCdDvDMedia);
    //***************************CD/DVD/Media*************************//

    //***************************DDS/StudyRooms***********************//
    const ddsStudyRooms = new BABYLON.Mesh("ddsStudyRooms", scene);
    
    const targetDDSStudyRooms = GUI.Button.CreateImageWithCenterTextButton('targetDDSStudyRooms', "DDS Study Rooms");
    
        targetDDSStudyRooms.top = "16%";
        targetDDSStudyRooms.left = "45%";
        targetDDSStudyRooms.fontSize = "1.5%";
        targetDDSStudyRooms.width = "8%";
        targetDDSStudyRooms.height = "6%";
        targetDDSStudyRooms.color = "Black";
        targetDDSStudyRooms.thickness = 2.5;
        targetDDSStudyRooms.background = "#F96161";
    
        targetDDSStudyRooms.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageS;
            dome = worldDome(imageS);

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

    advancedTexture.addControl(targetDDSStudyRooms);
    //***************************DDS/StudyRooms***********************//

    //***************************DDS/StudyWing***********************//
    const ddsStudyWing = new BABYLON.Mesh("ddsStudyWing", scene);
    
    const targetDDSStudyWing = GUI.Button.CreateImageWithCenterTextButton('targetDDSStudyWing', "DDS Study Wing");
    
        targetDDSStudyWing.top = "23%";
        targetDDSStudyWing.left = "45%";
        targetDDSStudyWing.fontSize = "1.5%";
        targetDDSStudyWing.width = "8%";
        targetDDSStudyWing.height = "6%";
        targetDDSStudyWing.color = "Black";
        targetDDSStudyWing.thickness = 2.5;
        targetDDSStudyWing.background = "#F96161";
    
        targetDDSStudyWing.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageR;
            dome = worldDome(imageR);

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

    advancedTexture.addControl(targetDDSStudyWing);
    //***************************DDS/StudyWingB***********************//

    //***************************Children'sPlayArea*******************//
    const childrensPlayArea = new BABYLON.Mesh("childrensPlayArea", scene);
    
    const targetChildrensPlayArea = GUI.Button.CreateImageWithCenterTextButton('targetChildrensPlayArea', "Children's Play Area");
    
        targetChildrensPlayArea.top = "30%";
        targetChildrensPlayArea.left = "45%";
        targetChildrensPlayArea.fontSize = "1.5%";
        targetChildrensPlayArea.width = "8%";
        targetChildrensPlayArea.height = "6%";
        targetChildrensPlayArea.color = "Black";
        targetChildrensPlayArea.thickness = 2.5;
        targetChildrensPlayArea.background = "#F96161";
    
        targetChildrensPlayArea.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageN;
            dome = worldDome(imageN);

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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

        });

    advancedTexture.addControl(targetChildrensPlayArea);
    //***************************Children'sPlayArea*******************//

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