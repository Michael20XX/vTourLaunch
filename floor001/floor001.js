import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
import "@babylonjs/core/Particles/particleSystemComponent";
import "@babylonjs/core/Particles/webgl2ParticleSystem";
import {} from '@babylonjs/inspector';
import * as GUI from '@babylonjs/gui';

//OMITED: imageI, imageL, imageO, imageQ, imageU, imageV 

import imageA from './src/assets/img/image020.jpg'
import imageB from './src/assets/img/image014.jpg'
import imageC from './src/assets/img/image013.jpg'
import imageD from './src/assets/img/image018.jpg'
import imageE from './src/assets/img/image005.jpg'
import imageF from './src/assets/img/image006.jpg'
import imageG from './src/assets/img/image012.jpg'
import imageH from './src/assets/img/image015.jpg'
import imageJ from './src/assets/img/image004.jpg'
import imageK from './src/assets/img/image007.jpg'
import imageM from './src/assets/img/image011.jpg'
import imageN from './src/assets/img/image016.jpg'
import imageP from './src/assets/img/image003.jpg'
import imageR from './src/assets/img/image017.jpg'
import imageS from './src/assets/img/image010.jpg'
import imageT from './src/assets/img/image008.jpg'
import imageW from './src/assets/img/image009.jpg'
import imageX from './src/assets/img/image019.jpg'
import imageY from './src/assets/img/image002.jpg'
import imageZ from './src/assets/img/image001.jpg'

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
            actualImage = imageA;
            break;
    }

    let dome = worldDome(actualImage);

    //Targets
    const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');

    //***************************TargetA******************************//
    //North Button
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
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageB;
                    dome = worldDome(imageB);
                    targetB.isVisible = !targetB.isVisible; //turn on West Button
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageC:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetC.isVisible = !targetC.isVisible; //turn off East Button
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageE;
                    dome = worldDome(imageE);
                    dome.rotate.x = Math.PI / 2 ;
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageD:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetC.isVisible = !targetC.isVisible; //turn off East Button
                    actualImage = imageF;
                    dome = worldDome(imageF);
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageM:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    targetC.isVisible = !targetC.isVisible; //turn off East Button
                    actualImage = imageJ;
                    dome = worldDome(imageJ);
                    break;
                case imageN:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetB.isVisible = !targetB.isVisible; //turn off West Button 
                    targetC.isVisible = !targetC.isVisible; //turn off East Button
                    actualImage = imageK;
                    dome = worldDome(imageK);
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageP:
                    dome.dispose();
                    actualImage = imageM;
                    dome = worldDome(imageM);
                    targetB.isVisible = !targetB.isVisible; //turn on West Button
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageX:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageR;
                    dome = worldDome(imageR);
                    targetB.isVisible = !targetB.isVisible; //turn on West Button
                    targetC.isVisible = !targetC.isVisible; //turn on East Button
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
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
                    targetD.isVisible = !targetD.isVisible //turn off South Button
                    actualImage = imageC;
                    dome = worldDome(imageC);
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    break;
                case imageC:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageG;
                    dome = worldDome(imageG);
                    break;
                case imageD:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageB;
                    dome = worldDome(imageB);
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageG:
                    dome.dispose();
                    actualImage = imageM;
                    dome = worldDome(imageM);
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    targetD.isVisible = !targetD.isVisible; //turn on South Button
                    break;
                case imageH:
                    dome.dispose();
                    actualImage = imageD;
                    dome = worldDome(imageD);
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    break;
                case imageM:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageS;
                    dome = worldDome(imageS);
                    break;
                case imageN:
                    dome.dispose();
                    targetA.isVisible = !targetA.isVisible; //turn off North Button
                    actualImage = imageH;
                    dome = worldDome(imageH);
                    break;
                case imageR:
                    dome.dispose();
                    targetD.isVisible = !targetD.isVisible; //turn off South Button
                    actualImage = imageN;
                    dome = worldDome(imageN);
                    targetA.isVisible = !targetA.isVisible; //turn on North Button
                    break;
                case imageS:
                    dome.dispose();
                    actualImage = imageW;
                    dome = worldDome(imageW);
                    break;
                case imageT:
                    dome.dispose();
                    actualImage = imageR;
                    dome = worldDome(imageR);
                    targetC.isVisible = !targetC.isVisible //turn on East Button
                    targetD.isVisible = !targetD.isVisible //turn on South Button
                    break;
                case imageW:
                    dome.dispose();
                    actualImage = imageY;
                    dome = worldDome(imageY);
                    break;
                case imageY:
                    dome.dispose();
                    targetB.isVisible = !targetB.isVisible; //turn off West Button
                    actualImage = imageZ; 
                    dome = worldDome(imageZ);
                    break;
                    
            }
            
        });

        advancedTexture.addControl(targetB);
        targetB.linkWithMesh(globeMarkerB);

        switch(actualImage){
            case imageA:
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
            case imageB:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button 
                actualImage = imageD;
                dome = worldDome(imageD);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                break;
            case imageC:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageB;
                dome = worldDome(imageB);
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                break;
            case imageD:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageH;
                dome = worldDome(imageH);
                break;
            case imageG:
                dome.dispose();
                actualImage = imageC;
                dome = worldDome(imageC);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                break;
            case imageH:
                dome.dispose();
                actualImage = imageN;
                dome = worldDome(imageN);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                break;
            case imageJ:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                actualImage = imageE;
                dome = worldDome(imageE);
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                break;
            case imageM:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageG;
                dome = worldDome(imageG);
                break;
            case imageN:
                dome.dispose();
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                actualImage = imageR;
                dome = worldDome(imageR);
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                break;
            case imageR:
                dome.dispose();
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                targetD.isVisible = !targetD.isVisible; //tunr off South Button
                actualImage = imageT;
                dome = worldDome(imageT);
                break;
            case imageS:
                dome.dispose();
                actualImage = imageM;
                dome = worldDome(imageM);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetD.isVisible = !targetD.isVisible; //turn on South Button
                break;
            case imageW:
                dome.dispose();
                actualImage = imageS;
                dome = worldDome(imageS);
                break;
            case imageY:
                dome.dispose();
                actualImage = imageW;
                dome = worldDome(imageW);
                break;
            case imageZ:
                dome.dispose();
                actualImage = imageY;
                dome = worldDome(imageY);
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                break;

        }
        
    });

    advancedTexture.addControl(targetC);
    targetC.linkWithMesh(globeMarkerC);

    switch(actualImage){
        case imageA:
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
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageA;
                dome = worldDome(imageA);
                targetA.isVisible = !targetA.isVisible; //turon on North Button
                break;
            case imageE:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageC;
                dome = worldDome(imageC);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isvisible; //turn on East Button
                break;
            case imageF:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageD;
                dome = worldDome(imageD);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //tutn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                break;
            case imageJ:
                dome.dispose();
                actualImage = imageM;
                dome = worldDome(imageM);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                targetB.isVisible = !targetB.isVisible; //turn on West Button
                targetC.isVisible = !targetC.isVisible; //turn on East Button
                break;
            case imageK:
                dome.dispose();
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageN;
                dome = worldDome(imageN);
                targetA.isVisible = !targetA.isVisible; //turn off North Button
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                break;
            case imageM:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageP;
                dome = worldDome(imageP);
                break;
            case imageR:
                dome.dispose();
                targetB.isVisible = !targetB.isVisible; //turn off West Button
                targetC.isVisible = !targetC.isVisible; //turn off East Button
                targetD.isVisible = !targetD.isVisible; //turn off South Button
                actualImage = imageX;
                dome = worldDome(imageX);
                targetA.isVisible = !targetA.isVisible; //turn on North Button
                break;
            

        }
        
    });

    advancedTexture.addControl(targetD);
    targetD.linkWithMesh(globeMarkerD);

    switch(actualImage){
        case imageA:
            targetD.isVisible = !targetD.isVisible; //turn off South Button
            break;
    }

    //***************************TargetD******************************//

    //***************************Reset*******************************
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
        actualImage = imageA;
        dome = worldDome(imageA);

        /*Whatever node(image) the user may be in...
`       make it so that only the North Button is present.
        */

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
    
    advancedTexture.addControl(resetTarget);



    //***************************Reset*******************************//

    //***************************WrttingCenterTarget*****************//
    const writingCenter = new BABYLON.Mesh("writtingCenter", scene);
    
    const targetWCenter = GUI.Button.CreateImageWithCenterTextButton('targetWCenter', "Writting Center");
    
        targetWCenter.top = "-47%";
        targetWCenter.left = "45%";
        targetWCenter.fontSize = "1.5%";
        targetWCenter.width = "8%";
        targetWCenter.height = "6%";
        targetWCenter.color = "Black";
        targetWCenter.thickness = 2.5;
        targetWCenter.background = "#F96161";
    
        targetWCenter.onPointerUpObservable.add(() => {
            
            dome.dispose();
            actualImage = imageZ;
            dome = worldDome(imageZ);

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
    
        advancedTexture.addControl(targetWCenter);
           
    //***************************WritingCenterTarget*****************//

    //***************************Computers***************************//
    const computers = new BABYLON.Mesh("computers", scene);
    
    const targetComputers = GUI.Button.CreateImageWithCenterTextButton('targetComputers', "Computer Area");
    
        targetComputers.top = "-40%";
        targetComputers.left = "45%";
        targetComputers.fontSize = "1.5%";
        targetComputers.width = "8%";
        targetComputers.height = "6%";
        targetComputers.color = "Black";
        targetComputers.thickness = 2.5;
        targetComputers.background = "#F96161";
    
        targetComputers.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageY;
            dome = worldDome(imageY);
            
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

        advancedTexture.addControl(targetComputers);
    //***************************Computers***************************//

    //***************************RefDesk*****************************//
    const refDesk = new BABYLON.Mesh("refDesk", scene);
    
    const targetRefDesk = GUI.Button.CreateImageWithCenterTextButton('targetRefDesk', "Ref Desk");
    
        targetRefDesk.top = "-33%";
        targetRefDesk.left = "45%";
        targetRefDesk.fontSize = "1.5%";
        targetRefDesk.width = "8%";
        targetRefDesk.height = "6%";
        targetRefDesk.color = "Black";
        targetRefDesk.thickness = 2.5;
        targetRefDesk.background = "#F96161";
    
        targetRefDesk.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageW;
            dome = worldDome(imageW);
            
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

        advancedTexture.addControl(targetRefDesk);
    //***************************RefDesk*****************************//

    //***************************Bathrooms***************************//
    const bathroom = new BABYLON.Mesh("bathroom", scene);
    
    const targetBathroom = GUI.Button.CreateImageWithCenterTextButton('targetBathroom', "Bathroom");
    
        targetBathroom.top = "-26%";
        targetBathroom.left = "45%";
        targetBathroom.fontSize = "1.5%";
        targetBathroom.width = "8%";
        targetBathroom.height = "6%";
        targetBathroom.color = "Black";
        targetBathroom.thickness = 2.5;
        targetBathroom.background = "#F96161";
    
        targetBathroom.onPointerUpObservable.add(() => {

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

        advancedTexture.addControl(targetBathroom);
    //***************************Bathrooms***************************//

    //***************************GroupStudy**************************//
    const groupStudy = new BABYLON.Mesh("groupStudy", scene);
    
    const targetGroupStudy = GUI.Button.CreateImageWithCenterTextButton('targetGroupStudy', "Group Study");
    
        targetGroupStudy.top = "-19%";
        targetGroupStudy.left = "45%";
        targetGroupStudy.fontSize = "1.5%";
        targetGroupStudy.width = "8%";
        targetGroupStudy.height = "6%";
        targetGroupStudy.color = "Black";
        targetGroupStudy.thickness = 2.5;
        targetGroupStudy.background = "#F96161";
    
        targetGroupStudy.onPointerUpObservable.add(() => {

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

        advancedTexture.addControl(targetGroupStudy);
    //***************************GroupStudy**************************//

    //***************************Lounge******************************//
    const lounge = new BABYLON.Mesh("lounge", scene);
    
    const targetLounge = GUI.Button.CreateImageWithCenterTextButton('targetLounge', "Lounge");
    
        targetLounge.top = "-12%";
        targetLounge.left = "45%";
        targetLounge.fontSize = "1.5%";
        targetLounge.width = "8%";
        targetLounge.height = "6%";
        targetLounge.color = "Black";
        targetLounge.thickness = 2.5;
        targetLounge.background = "#F96161";
    
        targetLounge.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageE;
            dome = worldDome(imageE);
            
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

            

        })

        advancedTexture.addControl(targetLounge);
    //***************************Lounge******************************//

    //***************************CircDesk*****************************//
    const circDesk = new BABYLON.Mesh("circDesk", scene);
    
    const targetCircDesk = GUI.Button.CreateImageWithCenterTextButton('targetCircDesk', "Circ Desk");
    
        targetCircDesk.top = "-5%";
        targetCircDesk.left = "45%";
        targetCircDesk.fontSize = "1.5%";
        targetCircDesk.width = "8%";
        targetCircDesk.height = "6%";
        targetCircDesk.color = "Black";
        targetCircDesk.thickness = 2.5;
        targetCircDesk.background = "#F96161";
    
        targetCircDesk.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageB;
            dome = worldDome(imageB);
            
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

        advancedTexture.addControl(targetCircDesk);
    //***************************Circdesk*****************************//

    //***************************Elevator*****************************//
    const elevator = new BABYLON.Mesh("elevator", scene);
    
    const targetElevator = GUI.Button.CreateImageWithCenterTextButton('targetElevator', "Elevator");
    
        targetElevator.top = "2%";
        targetElevator.left = "45%";
        targetElevator.fontSize = "1.5%";
        targetElevator.width = "8%";
        targetElevator.height = "6%";
        targetElevator.color = "Black";
        targetElevator.thickness = 2.5;
        targetElevator.background = "#F96161";
    
        targetElevator.onPointerUpObservable.add(() => {

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

        advancedTexture.addControl(targetElevator);
    //***************************Elevator*****************************//

    //***************************Printers/Scanners********************//
    const printerScanner = new BABYLON.Mesh("printerScanner", scene);
    
    const targetPrinterScanner = GUI.Button.CreateImageWithCenterTextButton('targetPrinterScanner', "Printer/ Scanners");
    
        targetPrinterScanner.top = "9%";
        targetPrinterScanner.left = "45%";
        targetPrinterScanner.fontSize = "1.5%";
        targetPrinterScanner.width = "8%";
        targetPrinterScanner.height = "6%";
        targetPrinterScanner.color = "Black";
        targetPrinterScanner.thickness = 2.5;
        targetPrinterScanner.background = "#F96161";
    
        targetPrinterScanner.onPointerUpObservable.add(() => {

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

        advancedTexture.addControl(targetPrinterScanner);
    //***************************Printers/Scanners********************//

    //***************************ATLC*********************************//
    const atlc = new BABYLON.Mesh("atlc", scene);
    
    const targetAtlc = GUI.Button.CreateImageWithCenterTextButton('targetAtlc', "ATLC");
    
        targetAtlc.top = "16%";
        targetAtlc.left = "45%";
        targetAtlc.fontSize = "1.5%";
        targetAtlc.width = "8%";
        targetAtlc.height = "6%";
        targetAtlc.color = "Black";
        targetAtlc.thickness = 2.5;
        targetAtlc.background = "#F96161";
    
        targetAtlc.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageK;
            dome = worldDome(imageK);

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

            

        })

        advancedTexture.addControl(targetAtlc);
    //***************************ATLC*********************************//

    //***************************LibrarianOffices*********************//
    const libOffices = new BABYLON.Mesh("libOffices", scene);
    
    const targetLibOffices = GUI.Button.CreateImageWithCenterTextButton('targetLibOffices', "Lib Offices");
    
        targetLibOffices.top = "23%";
        targetLibOffices.left = "45%";
        targetLibOffices.fontSize = "1.5%";
        targetLibOffices.width = "8%";
        targetLibOffices.height = "6%";
        targetLibOffices.color = "Black";
        targetLibOffices.thickness = 2.5;
        targetLibOffices.background = "#F96161";
    
        targetLibOffices.onPointerUpObservable.add(() => {

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

        advancedTexture.addControl(targetLibOffices);
    //***************************LibrarianOffices*********************//

    //***************************StudyWing****************************//
    const studyWing = new BABYLON.Mesh("studyWing", scene);
    
    const targetStudyWing = GUI.Button.CreateImageWithCenterTextButton('targetStudyWing', "Study Wing");
    
        targetStudyWing.top = "30%";
        targetStudyWing.left = "45%";
        targetStudyWing.fontSize = "1.5%";
        targetStudyWing.width = "8%";
        targetStudyWing.height = "6%";
        targetStudyWing.color = "Black";
        targetStudyWing.thickness = 2.5;
        targetStudyWing.background = "#F96161";
    
        targetStudyWing.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageR;
            dome = worldDome(imageR);
            
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

        advancedTexture.addControl(targetStudyWing);
    //***************************StudyWing****************************//

    //***************************ProjectRooms*************************//
    const projectRooms = new BABYLON.Mesh("projectRooms", scene);
    
    const targetProjectRooms = GUI.Button.CreateImageWithCenterTextButton('targetProjectRooms', "Project Rooms");
    
        targetProjectRooms.top = "37%";
        targetProjectRooms.left = "45%";
        targetProjectRooms.fontSize = "1.5%";
        targetProjectRooms.width = "8%";
        targetProjectRooms.height = "6%";
        targetProjectRooms.color = "Black";
        targetProjectRooms.thickness = 2.5;
        targetProjectRooms.background = "#F96161";
    
        targetProjectRooms.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageT;
            dome = worldDome(imageT);
            
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
                    targetD.isVisible = false;
                    break;
                case false:
                    targetD.isVisible = false;
                    break;
            }

            

        })

        advancedTexture.addControl(targetProjectRooms);
    //***************************ProjectRooms*************************//

    //***************************ProjectWall**************************//
    const projectWall = new BABYLON.Mesh("projectWall", scene);
    
    const targetProjectWall = GUI.Button.CreateImageWithCenterTextButton('targetProjectWall', "Project Wall");
    
        targetProjectWall.top = "44%";
        targetProjectWall.left = "45%";
        targetProjectWall.fontSize = "1.5%";
        targetProjectWall.width = "8%";
        targetProjectWall.height = "6%";
        targetProjectWall.color = "Black";
        targetProjectWall.thickness = 2.5;
        targetProjectWall.background = "#F96161";
    
        targetProjectWall.onPointerUpObservable.add(() => {

            dome.dispose();
            actualImage = imageP;
            dome = worldDome(imageP);
            
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

            

        })

        advancedTexture.addControl(targetProjectWall);
    //***************************ProjectWall**************************//

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
};

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});