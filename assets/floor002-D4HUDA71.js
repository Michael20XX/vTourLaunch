import"./modulepreload-polyfill-B5Qt9EMX.js";import{E as ii,S as si,A as ei,V as N,a as ai,M as V,B as c,P as ti}from"./babylon.inspector.bundle.max-D2FR20op.js";const O="/vTourLaunch/assets/image001-DH2W9QOS.jpg",U="/vTourLaunch/assets/image002-B_BJM3zr.jpg",M="/vTourLaunch/assets/image003-Df01JhFg.jpg",I="/vTourLaunch/assets/image004-igWq74ms.jpg",P="/vTourLaunch/assets/image005-DcOGyjLB.jpg",n="/vTourLaunch/assets/image006-D4V45REL.jpg",g="/vTourLaunch/assets/image007-d2d3Gc6s.jpg",z="/vTourLaunch/assets/image008-Cwr1C4x-.jpg",u="/vTourLaunch/assets/image009-Ri4dU66q.jpg",B="/vTourLaunch/assets/image010-CwzB8uo8.jpg",y="/vTourLaunch/assets/image011-DvnsiXRt.jpg",v="/vTourLaunch/assets/image012-D8DCrPwG.jpg",E="/vTourLaunch/assets/image013-Cd1ToRnN.jpg",T="/vTourLaunch/assets/image014-3HI7-q-Q.jpg",A="/vTourLaunch/assets/image015-Bp1TZsEh.jpg",L="/vTourLaunch/assets/image016-CCk9SV4T.jpg",F="/vTourLaunch/assets/image017-BR7y9nLq.jpg",W="/vTourLaunch/assets/image018-BxykXCB5.jpg",S="/vTourLaunch/assets/image019-DAchbd5B.jpg",j="/vTourLaunch/assets/image020-BIzUWymy.jpg",R="/vTourLaunch/assets/image021-CQ_KrFcX.jpg",D="/vTourLaunch/assets/image022-CyBBxCGQ.jpg",x="/vTourLaunch/assets/image023-RPrJCC7a.jpg",G="/vTourLaunch/assets/image024-CfQvi-p0.jpg",Q="/vTourLaunch/assets/cSU_Vikings-Bc67_Zl7.jpg",bi="/vTourLaunch/assets/navigationLegend-DuJ4_w6t.jpg",q=document.getElementById("renderCanvas"),X=new ii(q),li=function(){const r=new si(X),_=new ei("Camera",-Math.PI/2,Math.PI/2,5,N.Zero(),r);_.attachControl(q,!0),_.inputs.attached.mousewheel.detachControl(q),_.fov=.96;let t;function b($){return new ti("sphere",$,{resolution:64,size:1e3,useDirectMapping:!1},r)}switch(t){case void 0:t=n;break}let i=b(t);const o=ai.CreateFullscreenUI("UI"),Z=new V("globeMarkerA",r);Z.position=new N(500,0,0);const l=c.CreateImageWithCenterTextButton("targetA","N",Q);l.width="50px",l.height="50px",l.color="Orange",l.thickness=3,l.image.alpha=.7,l.fontSize="30",l.onPointerUpObservable.add(()=>{switch(t){case O:i.dispose(),s.isVisible=!s.isVisible,t=U,a.isVisible=!a.isVisible,i=b(U);break;case U:i.dispose(),l.isVisible=!l.isVisible,t=M,s.isVisible=!s.isVisible,i=b(M);break;case I:i.dispose(),s.isVisible=!s.isVisible,t=P,a.isVisible=!a.isVisible,i=b(P);break;case P:i.dispose(),t=n,i=b(n);break;case n:i.dispose(),l.isVisible=!l.isVisible,t=g,i=b(g),e.isVisible=!e.isVisible,s.isVisible=!s.isVisible;break;case u:i.dispose(),e.isVisible=!e.isVisible,t=B,a.isVisible=!a.isVisible,i=b(B);break;case v:i.dispose(),e.isVisible=!e.isVisible,l.isVisible=!l.isVisible,t=E,s.isVisible=!s.isVisible,i=b(E);break;case B:i.dispose(),s.isVisible=!s.isVisible,t=y,i=b(y);break;case y:i.dispose(),t=v,e.isVisible=!e.isVisible,i=b(v);break;case T:i.dispose(),e.isVisible=!e.isVisible,s.isVisible=!s.isVisible,t=A,a.isVisible=!a.isVisible,i=b(A);break;case A:i.dispose(),l.isVisible=!l.isVisible,t=L,e.isVisible=!e.isVisible,s.isVisible=!s.isVisible,i=b(L);break;case W:i.dispose(),s.isVisible=!s.isVisible,t=S,a.isVisible=!a.isVisible,i=b(S);break;case S:i.dispose(),e.isVisible=!e.isVisible,t=j,s.isVisible=!s.isVisible,i=b(j);break;case j:i.dispose(),l.isVisible=!l.isVisible,s.isVisible=!s.isVisible,t=R,e.isVisible=!e.isVisible,i=b(R);break;case D:i.dispose(),t=x,a.isVisible=!a.isVisible,i=b(x);break;case x:i.dispose(),l.isVisible=!l.isVisible,t=G,i=b(G);break}}),o.addControl(l),l.linkWithMesh(Z);const H=new V("globeMarkerB",r);H.position=new N(0,0,500);const e=c.CreateImageWithCenterTextButton("targetB","W",Q);switch(e.width="50px",e.height="50px",e.color="Orange",e.thickness=3,e.image.alpha=.7,e.fontSize="30",e.onPointerUpObservable.add(()=>{switch(t){case g:i.dispose(),e.isVisible=!e.isVisible,a.isVisible=!a.isVisible,t=O,l.isVisible=!l.isVisible,i=b(O);break;case z:i.dispose(),t=g,a.isVisible=!a.isVisible,i=b(g);break;case u:i.dispose(),e.isVisible=!e.isVisible,t=I,i=b(I);break;case v:i.dispose(),l.isVisible=!l.isVisible,a.isVisible=!a.isVisible,t=z,s.isVisible=!s.isVisible,i=b(z);break;case T:i.dispose(),e.isVisible=!e.isVisible,t=B,a.isVisible=!a.isVisible,i=b(B);break;case L:i.dispose(),e.isVisible=!e.isVisible,t=E,i=b(E);break;case F:i.dispose(),e.isVisible=!e.isVisible,t=M,a.isVisible=!a.isVisible,i=b(M);break;case S:i.dispose(),a.isVisible=!a.isVisible,t=T,s.isVisible=!s.isVisible,i=b(T);break;case W:i.dispose(),t=u,i=b(u);break;case R:i.dispose(),s.isVisible=!s.isVisible,t=L,i=b(L);break;case D:i.dispose(),t=W,s.isVisible=!s.isVisible,i=b(W);break;case x:i.dispose(),e.isVisible=!e.isVisible,t=j,s.isVisible=!s.isVisible,i=b(j);break;case G:i.dispose(),a.isVisible=!a.isVisible,t=F,s.isVisible=!s.isVisible,i=b(F);break}}),o.addControl(e),e.linkWithMesh(H),t){case n:e.isVisible=!e.isVisible;break}const K=new V("globeMarkerC",r);K.position=new N(0,0,-500);const s=c.CreateImageWithCenterTextButton("targetC","E",Q);switch(s.width="50px",s.height="50px",s.color="Orange",s.thickness=3,s.image.alpha=.7,s.fontSize="30",s.onPointerUpObservable.add(()=>{switch(t){case O:i.dispose(),l.isVisible=!l.isVisible,t=g,e.isVisible=!e.isVisible,a.isVisible=!a.isVisible,i=b(g);break;case M:i.dispose(),a.isVisible=!a.isVisible,t=F,e.isVisible=!e.isVisible,i=b(F);break;case I:i.dispose(),t=u,e.isVisible=!e.isVisible,i=b(u);break;case g:i.dispose(),a.isVisible=!a.isVisible,t=z,i=b(z);break;case z:i.dispose(),s.isVisible=!s.isVisible,t=v,l.isVisible=!l.isVisible,a.isVisible=!a.isVisible,i=b(v);break;case u:i.dispose(),t=W,i=b(W);break;case B:i.dispose(),a.isVisible=!a.isVisible,t=T,e.isVisible=!e.isVisible,i=b(T);break;case E:i.dispose(),e.isVisible=!e.isVisible,t=L,i=b(L);break;case T:i.dispose(),s.isVisible=!s.isVisible,t=S,a.isVisible=!a.isVisible,i=b(S);break;case L:i.dispose(),s.isVisible=!s.isVisible,t=R,i=b(R);break;case F:i.dispose(),s.isVisible=!s.isVisible,t=G,a.isVisible=!a.isVisible,i=b(G);break;case W:i.dispose(),s.isVisible=!s.isVisible,t=D,i=b(D);break;case j:i.dispose(),s.isVisible=!s.isVisible,t=x,e.isVisible=!e.isVisible,i=b(x);break}}),o.addControl(s),s.linkWithMesh(K),t){case n:s.isVisible=!s.isVisible;break}const Y=new V("globeMarkerD",r);Y.position=new N(-500,0,0);const a=c.CreateImageWithCenterTextButton("targetD","S",Q);a.width="50px",a.height="50px",a.color="Orange",a.thickness=3,a.image.alpha=.7,a.fontSize="30",a.onPointerUpObservable.add(()=>{switch(t){case U:i.dispose(),a.isVisible=!a.isVisible,t=O,s.isVisible=!s.isVisible,i=b(O);break;case M:i.dispose(),s.isVisible=!s.isVisible,t=U,l.isVisible=!l.isVisible,i=b(U);break;case P:i.dispose(),a.isVisible=!a.isVisible,t=I,s.isVisible=!s.isVisible,i=b(I);break;case n:i.dispose(),t=P,i=b(P);break;case g:i.dispose(),e.isVisible=!e.isVisible,s.isVisible=!s.isVisible,t=n,i=b(n),l.isVisible=!l.isVisible;break;case B:i.dispose(),a.isVisible=!a.isVisible,t=u,e.isVisible=!e.isVisible,i=b(u);break;case y:i.dispose(),t=B,s.isVisible=!s.isVisible,i=b(B);break;case v:i.dispose(),e.isVisible=!e.isVisible,t=y,i=b(y);break;case E:i.dispose(),s.isVisible=!s.isVisible,t=v,e.isVisible=!e.isVisible,l.isVisible=!l.isVisible,i=b(v);break;case A:i.dispose(),a.isVisible=!a.isVisible,t=T,e.isVisible=!e.isVisible,s.isVisible=!s.isVisible,i=b(T);break;case L:i.dispose(),e.isVisible=!e.isVisible,s.isVisible=!s.isVisible,t=A,l.isVisible=!l.isVisible,i=b(A);break;case S:i.dispose(),a.isVisible=!a.isVisible,t=W,s.isVisible=!s.isVisible,i=b(W);break;case j:i.dispose(),s.isVisible=!s.isVisible,t=S,e.isVisible=!e.isVisible,i=b(S);break;case R:i.dispose(),e.isVisible=!e.isVisible,t=j,l.isVisible=!l.isVisible,s.isVisible=!s.isVisible,i=b(j);break;case x:i.dispose(),a.isVisible=!a.isVisible,t=D,i=b(D);break;case G:i.dispose(),t=x,l.isVisible=!l.isVisible,i=b(x);break}}),o.addControl(a),a.linkWithMesh(Y),new V("reset",r);const d=c.CreateImageWithCenterTextButton("resetTarget","Reset");d.top="-47%",d.left="",d.fontSize="1.5%",d.width="8%",d.height="6%",d.color="Black",d.thickness=2.5,d.background="#F96161",d.onPointerUpObservable.add(()=>{switch(i.dispose(),t=n,i=b(n),l.isVisible){case!0:l.isVisible=!0;break;case!1:l.isVisible=!0;break}switch(e.isVisible){case!0:e.isVisible=!1;break;case!1:e.isVisible=!1;break}switch(s.isVisible){case!0:s.isVisible=!1;break;case!1:s.isVisible=!1;break}switch(a.isVisible){case!0:a.isVisible=!0;break;case!1:a.isVisible=!0;break}}),o.addControl(d),new V("mathEmporium",r);const k=c.CreateImageWithCenterTextButton("targetMathEmporium","Math Emporium");k.top="-47%",k.left="45%",k.fontSize="1.5%",k.width="8%",k.height="6%",k.color="Black",k.thickness=2.5,k.background="#F96161",k.onPointerUpObservable.add(()=>{switch(i.dispose(),t=I,i=b(I),l.isVisible){case!0:l.isVisible=!0;break;case!1:l.isVisible=!0;break}switch(e.isVisible){case!0:e.isVisible=!1;break;case!1:e.isVisible=!1;break}switch(s.isVisible){case!0:s.isVisible=!0;break;case!1:s.isVisible=!0;break}switch(a.isVisible){case!0:a.isVisible=!1;break;case!1:a.isVisible=!1;break}}),o.addControl(k),new V("studyWingA",r);const h=c.CreateImageWithCenterTextButton("targetStudyWingA","Styudy Wing A");h.top="-40%",h.left="45%",h.fontSize="1.5%",h.width="8%",h.height="6%",h.color="Black",h.thickness=2.5,h.background="#F96161",h.onPointerUpObservable.add(()=>{switch(i.dispose(),t=u,i=b(u),l.isVisible){case!0:l.isVisible=!0;break;case!1:l.isVisible=!0;break}switch(e.isVisible){case!0:e.isVisible=!0;break;case!1:e.isVisible=!0;break}switch(s.isVisible){case!0:s.isVisible=!0;break;case!1:s.isVisible=!0;break}switch(a.isVisible){case!0:a.isVisible=!1;break;case!1:a.isVisible=!1;break}}),o.addControl(h),new V("eLearningCntr",r);const p=c.CreateImageWithCenterTextButton("targetELearningCntr","E Learning Center");p.top="-33%",p.left="45%",p.fontSize="1.5%",p.width="8%",p.height="6%",p.color="Black",p.thickness=2.5,p.background="#F96161",p.onPointerUpObservable.add(()=>{switch(i.dispose(),t=D,i=b(D),l.isVisible){case!0:l.isVisible=!0;break;case!1:l.isVisible=!0;break}switch(e.isVisible){case!0:e.isVisible=!0;break;case!1:e.isVisible=!0;break}switch(s.isVisible){case!0:s.isVisible=!1;break;case!1:s.isVisible=!1;break}switch(a.isVisible){case!0:a.isVisible=!1;break;case!1:a.isVisible=!1;break}}),o.addControl(p),new V("stairs",r);const m=c.CreateImageWithCenterTextButton("targetStairs","Stairs");m.top="-26%",m.left="45%",m.fontSize="1.5%",m.width="8%",m.height="6%",m.color="Black",m.thickness=2.5,m.background="#F96161",m.onPointerUpObservable.add(()=>{switch(i.dispose(),t=z,i=b(z),l.isVisible){case!0:l.isVisible=!1;break;case!1:l.isVisible=!1;break}switch(e.isVisible){case!0:e.isVisible=!0;break;case!1:e.isVisible=!0;break}switch(s.isVisible){case!0:s.isVisible=!0;break;case!1:s.isVisible=!0;break}switch(a.isVisible){case!0:a.isVisible=!1;break;case!1:a.isVisible=!1;break}}),o.addControl(m),new V("mensBathroom",r);const f=c.CreateImageWithCenterTextButton("targetMensBathroom","Men's Bathroom");f.top="-19%",f.left="45%",f.fontSize="1.5%",f.width="8%",f.height="6%",f.color="Black",f.thickness=2.5,f.background="#F96161",f.onPointerUpObservable.add(()=>{switch(i.dispose(),t=g,i=b(g),l.isVisible){case!0:l.isVisible=!1;break;case!1:l.isVisible=!1;break}switch(e.isVisible){case!0:e.isVisible=!0;break;case!1:e.isVisible=!0;break}switch(s.isVisible){case!0:s.isVisible=!0;break;case!1:s.isVisible=!0;break}switch(a.isVisible){case!0:a.isVisible=!0;break;case!1:a.isVisible=!0;break}}),o.addControl(f),new V("womensBathroom",r);const w=c.CreateImageWithCenterTextButton("targetWomensBathroom","Women's Bathroom");w.top="-12%",w.left="45%",w.fontSize="1.5%",w.width="8%",w.height="6%",w.color="Black",w.thickness=2.5,w.background="#F96161",w.onPointerUpObservable.add(()=>{switch(i.dispose(),t=P,i=b(P),l.isVisible){case!0:l.isVisible=!0;break;case!1:l.isVisible=!0;break}switch(e.isVisible){case!0:e.isVisible=!1;break;case!1:e.isVisible=!1;break}switch(s.isVisible){case!0:s.isVisible=!1;break;case!1:s.isVisible=!1;break}switch(a.isVisible){case!0:a.isVisible=!0;break;case!1:a.isVisible=!0;break}}),o.addControl(w),new V("studyWingB",r);const C=c.CreateImageWithCenterTextButton("targetStudyWingB","Study Wing B");C.top="-5%",C.left="45%",C.fontSize="1.5%",C.width="8%",C.height="6%",C.color="Black",C.thickness=2.5,C.background="#F96161",C.onPointerUpObservable.add(()=>{switch(i.dispose(),t=M,i=b(M),l.isVisible){case!0:l.isVisible=!1;break;case!1:l.isVisible=!1;break}switch(e.isVisible){case!0:e.isVisible=!1;break;case!1:e.isVisible=!1;break}switch(s.isVisible){case!0:s.isVisible=!0;break;case!1:s.isVisible=!0;break}switch(a.isVisible){case!0:a.isVisible=!0;break;case!1:a.isVisible=!0;break}}),o.addControl(C),new V("navLegend",r);const J=c.CreateImageWithCenterTextButton("targetNavLegend","",bi);return J.width="20%",J.height="28%",J.top="34%",J.left="",o.addControl(J),r},ri=li();X.runRenderLoop(function(){ri.render()});window.addEventListener("resize",function(){X.resize()});
