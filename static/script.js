
// history.scrollRestoration = "manual";



//WAVES
const lpath = document.getElementById('lpath')
const rpath = document.getElementById('rpath')
const lwave = document.getElementById('lwave')

const p1 = `M155 0C140 20 120 40 125 60C130 80 160 100 165 120C170 140 150 160 155 180C160 200 120 220 130 240C140 260 180 280 190 300C200 320 180 340 170 360C160 380 150 400 150 420C150 440 155 460 160 480C165 500 160 520 155 540C150 560 150 580 150 600L0 600L0 0Z`;
const p2 = `M155 0C165 20 145 40 135 60C125 80 150 100 175 120C200 140 180 160 150 180C120 200 140 220 160 240C180 260 200 280 180 300C160 320 140 340 150 360C160 380 180 400 170 420C160 440 150 460 155 480C160 500 170 520 165 540C160 560 150 580 150 600L0 600L0 0Z`;
const p3 = `M155 0C130 20 160 40 170 60C180 80 150 100 130 120C110 140 130 160 160 180C190 200 170 220 150 240C130 260 110 280 130 300C150 320 170 340 160 360C150 380 130 400 140 420C150 440 160 460 155 480C150 500 140 520 145 540C150 560 155 580 150 600L0 600L0 0Z`;

gsap.timeline({ repeat: -1, yoyo: true })
  .to(lpath, { duration: 1, attr: { d: p2 }, ease: "sine.inOut" })
  .to(lpath, { duration: 1, attr: { d: p3 }, ease: "sine.inOut" })
  .to(lpath, { duration: 1, attr: { d: p1 }, ease: "sine.inOut" });

  gsap.timeline({ repeat: -1, yoyo: true })
  .to(rpath, { duration: 1, attr: { d: p2 }, ease: "sine.inOut" })
  .to(rpath, { duration: 1, attr: { d: p3 }, ease: "sine.inOut" })
  .to(rpath, { duration: 1, attr: { d: p1 }, ease: "sine.inOut" });

const project_page = document.getElementById('projects')
const web_btn = document.getElementById('web')
const webProjects = document.getElementById('web_projects');
const netProjects = document.getElementById('net_projects');

const vw = window.innerWidth

window.addEventListener("load", () => {
project_page.scrollLeft = project_page.scrollWidth / 2.5;});

function moveTo(dest){
    const target = document.getElementById(dest)
    target.scrollIntoView({behavior:'smooth'})
    if(document.getElementById('projects_main') && document.getElementById('rwave')){
        document.getElementById('projects_main').style.opacity = '0'
        document.getElementById('projects_main').style.flex="0";
        document.querySelectorAll('.projects_list').forEach((list)=>{
            list.style.opacity='1'
        })
        setTimeout(() => {
            document.getElementById('rwave').remove();
            document.getElementById('projects_main').remove()
        }, (1300));
    }
}

function scroll_left(target){
    const targ = document.getElementById(target)
    targ.scrollLeft-=600
}

function scroll_right(target){
    const targ = document.getElementById(target)
    targ.scrollLeft+=600
}



//Waves' auto translation
if (vw > 767){

        //Horizontal scroll
    const pro_lists = document.querySelectorAll('.projects_list')
    pro_lists.forEach((el)=>{
        el.addEventListener('wheel',(mouse)=>{
            mouse.preventDefault()
            el.scrollLeft+= mouse.deltaY*3
        })
    })

    project_page.addEventListener('mousemove',(mouse)=>{
        const rect = webProjects.getBoundingClientRect();
        if (rect.right < window.innerWidth * 0.85){

            //Showing Sys & Net
            if (mouse.clientX <= window.innerWidth * 0.2 && !document.getElementById('projects_main')){
                moveTo('web_projects')
            } else{
                webProjects.style.transform='translateX(0)'
            }

        } else{
            //Showing Web Dev
            if (mouse.clientX >= innerWidth * 0.9 ){
                moveTo('net_projects')
            } else{
                webProjects.style.transform='translateX(0)'

            }
            
        }

    })
}



//Navigation
const buttons = document.querySelectorAll('.nav a')

function select_nav(btn){
    buttons.forEach((btn)=>{
            btn.classList.remove('selected')
        })
        btn.classList.add('selected');
}

buttons.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        select_nav(btn)        
        //Redirect
        let dest = btn.textContent;
        window.location = `#${dest}`
    })
})

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            const id = entry.target.getAttribute('id');

            const activeBtn = document.querySelector(`.nav a[href="#${id}"]`);
            select_nav(activeBtn);
        }
    });
}, observerOptions);

const pages = document.querySelectorAll('.page');
pages.forEach((page) => {
    observer.observe(page);
});



// BAT AND BONUS ZONE

cmds = {
    "whoami":"guest",
    "hostname":"Alix's Portfolio",
    "cd":"Command not allowed (and probably not useful)",
    "help":"whoami   hostname   ls   cat   clear",
    "pwd":"/home/guest"
}


const _0x986c99=_0x4660;(function(_0x23ca5b,_0x41ff16){const _0x34cde4=_0x4660,_0x443524=_0x23ca5b();while(!![]){try{const _0x65d009=parseInt(_0x34cde4(0x143))/0x1*(-parseInt(_0x34cde4(0x166))/0x2)+-parseInt(_0x34cde4(0x154))/0x3*(parseInt(_0x34cde4(0x14e))/0x4)+-parseInt(_0x34cde4(0x14b))/0x5*(parseInt(_0x34cde4(0x145))/0x6)+parseInt(_0x34cde4(0x156))/0x7+-parseInt(_0x34cde4(0x15a))/0x8+-parseInt(_0x34cde4(0x162))/0x9+parseInt(_0x34cde4(0x146))/0xa;if(_0x65d009===_0x41ff16)break;else _0x443524['push'](_0x443524['shift']());}catch(_0x320e09){_0x443524['push'](_0x443524['shift']());}}}(_0x586d,0x75906));function _0x4660(_0x580c04,_0x12afaa){_0x580c04=_0x580c04-0x140;const _0x586da2=_0x586d();let _0x466044=_0x586da2[_0x580c04];if(_0x4660['\x4e\x77\x6b\x42\x72\x4e']===undefined){var _0x5402e=function(_0x5a2119){const _0x46fb5e='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x43c46a='',_0x217b56='';for(let _0xdf1d51=0x0,_0x3b832d,_0x2bf18a,_0x1037bd=0x0;_0x2bf18a=_0x5a2119['\x63\x68\x61\x72\x41\x74'](_0x1037bd++);~_0x2bf18a&&(_0x3b832d=_0xdf1d51%0x4?_0x3b832d*0x40+_0x2bf18a:_0x2bf18a,_0xdf1d51++%0x4)?_0x43c46a+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x3b832d>>(-0x2*_0xdf1d51&0x6)):0x0){_0x2bf18a=_0x46fb5e['\x69\x6e\x64\x65\x78\x4f\x66'](_0x2bf18a);}for(let _0x23c2dc=0x0,_0x49312=_0x43c46a['\x6c\x65\x6e\x67\x74\x68'];_0x23c2dc<_0x49312;_0x23c2dc++){_0x217b56+='\x25'+('\x30\x30'+_0x43c46a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x23c2dc)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x217b56);};_0x4660['\x47\x63\x6f\x6f\x76\x41']=_0x5402e,_0x4660['\x42\x76\x67\x77\x68\x4c']={},_0x4660['\x4e\x77\x6b\x42\x72\x4e']=!![];}const _0x9a5dc1=_0x586da2[0x0];_0x4660['\x63\x78\x63\x6e\x4d\x49']!==_0x9a5dc1&&(_0x4660['\x42\x76\x67\x77\x68\x4c']={},_0x4660['\x63\x78\x63\x6e\x4d\x49']=_0x9a5dc1);const _0x429a6c=_0x4660['\x42\x76\x67\x77\x68\x4c'][_0x580c04];return _0x429a6c===undefined?(_0x466044=_0x4660['\x47\x63\x6f\x6f\x76\x41'](_0x466044),_0x4660['\x42\x76\x67\x77\x68\x4c'][_0x580c04]=_0x466044):_0x466044=_0x429a6c,_0x466044;}function _0x586d(){const _0x509645=['\x44\x67\x76\x34\x44\x65\x6e\x56\x42\x4e\x72\x4c\x42\x4e\x71','\x7a\x32\x76\x30\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x65\x6a\x35\x73\x77\x71','\x44\x68\x6a\x50\x42\x71','\x6d\x74\x4b\x30\x6d\x64\x6d\x34\x6d\x4e\x62\x35\x77\x65\x54\x63\x74\x71','\x79\x32\x58\x4c\x79\x78\x69','\x73\x67\x76\x59\x7a\x73\x62\x50\x43\x59\x62\x48\x69\x68\x6e\x54\x79\x77\x58\x53\x69\x67\x6e\x4f\x79\x77\x58\x53\x7a\x77\x35\x4e\x7a\x73\x62\x4d\x42\x33\x69\x47\x45\x77\x39\x31\x6c\x63\x62\x4d\x41\x77\x35\x4b\x69\x68\x72\x4f\x7a\x73\x62\x4d\x42\x67\x66\x4e\x69\x68\x72\x56\x69\x67\x66\x4a\x79\x32\x76\x5a\x43\x59\x62\x54\x45\x73\x62\x64\x76\x65\x79\x47\x43\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x78\x6d\x47\x6f\x49\x4b','\x43\x32\x48\x4c\x42\x67\x58\x46\x79\x4d\x39\x34','\x6d\x4c\x62\x30\x42\x65\x6a\x36\x74\x47','\x41\x4d\x39\x50\x42\x47','\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d','\x79\x77\x72\x4b\x72\x78\x7a\x4c\x42\x4e\x72\x6d\x41\x78\x6e\x30\x7a\x77\x35\x4c\x43\x47','\x43\x33\x62\x53\x41\x78\x71','\x6c\x4d\x6e\x30\x7a\x4c\x39\x33\x43\x4d\x66\x57\x43\x67\x76\x59','\x44\x4d\x66\x53\x44\x77\x75','\x44\x67\x39\x4e\x7a\x32\x58\x4c','\x72\x4d\x4c\x53\x7a\x73\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71','\x43\x78\x76\x4c\x43\x4e\x4c\x74\x7a\x77\x58\x4c\x79\x33\x72\x56\x43\x4b\x66\x53\x42\x61','\x43\x33\x72\x35\x42\x67\x75','\x6f\x64\x4b\x35\x6d\x64\x69\x5a\x75\x68\x6a\x69\x74\x78\x48\x50','\x41\x67\x4c\x4b\x7a\x71','\x6d\x74\x48\x36\x77\x65\x50\x59\x42\x4b\x34','\x6d\x5a\x61\x5a\x6d\x64\x43\x59\x6e\x5a\x62\x4b\x71\x4e\x62\x35\x43\x77\x4f','\x7a\x78\x48\x57\x7a\x77\x35\x4b','\x71\x32\x39\x54\x42\x77\x66\x55\x7a\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x53\x69\x68\x72\x59\x45\x73\x61\x4e\x41\x67\x76\x53\x43\x63\x43\x47\x44\x67\x38\x47\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x73\x62\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x68\x6d','\x72\x77\x35\x30\x7a\x78\x69','\x6c\x78\x6a\x33\x6c\x78\x6a\x33\x6c\x78\x69\x54\x6c\x73\x61\x58\x69\x68\x6a\x56\x42\x33\x71\x47\x43\x4d\x39\x56\x44\x63\x61\x47\x6d\x74\x61\x47\x43\x32\x76\x57\x44\x63\x34\x47\x69\x64\x69\x32\x69\x64\x61\x35\x6f\x4a\x61\x5a\x69\x61','\x6d\x74\x65\x34\x6e\x5a\x71\x58\x6d\x65\x44\x6f\x7a\x4e\x6a\x6e\x71\x47','\x79\x78\x62\x57\x7a\x77\x35\x4b\x71\x32\x48\x50\x42\x67\x71','\x73\x78\x71\x47\x43\x32\x48\x56\x44\x77\x58\x4b\x69\x68\x72\x48\x41\x32\x75\x47\x79\x77\x6a\x56\x44\x78\x71\x47\x46\x4a\x66\x54\x41\x77\x34\x47\x44\x67\x38\x47\x43\x32\x39\x53\x44\x4d\x75\x47\x43\x32\x38\x47\x7a\x67\x38\x47\x42\x4d\x39\x30\x69\x68\x44\x56\x43\x4e\x6a\x35','\x6e\x68\x7a\x72\x76\x32\x6e\x73\x71\x57','\x79\x32\x58\x48\x43\x33\x6e\x6d\x41\x78\x6e\x30','\x7a\x4d\x39\x59\x72\x77\x66\x4a\x41\x61','\x79\x32\x66\x30','\x43\x33\x62\x48\x42\x47','\x73\x67\x76\x35\x6c\x63\x62\x35\x42\x33\x75\x47\x7a\x4d\x39\x31\x42\x4d\x71\x47\x44\x67\x48\x4c\x69\x67\x58\x50\x44\x68\x72\x53\x7a\x73\x62\x66\x79\x78\x6e\x30\x7a\x78\x69\x47\x7a\x77\x44\x4e\x69\x65\x4b\x47\x43\x67\x58\x48\x79\x32\x76\x4b\x69\x63\x65','\x6d\x5a\x79\x59\x6e\x5a\x79\x35\x75\x75\x6a\x4e\x79\x77\x35\x56','\x69\x59\x6d\x4a\x69\x59\x6d\x4a\x69\x59\x6d\x4a\x69\x59\x6d\x4a\x69\x59\x6d\x4a\x69\x57','\x6d\x74\x75\x57\x6e\x4a\x4b\x34\x6f\x67\x31\x33\x75\x67\x44\x77\x7a\x61','\x43\x33\x72\x48\x43\x4e\x72\x5a\x76\x32\x4c\x30\x41\x61','\x79\x33\x6a\x4c\x79\x78\x72\x4c\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x61','\x42\x33\x62\x48\x79\x32\x4c\x30\x45\x71','\x6e\x4a\x75\x5a\x6d\x74\x47\x5a\x6d\x4d\x39\x4a\x76\x68\x48\x50\x74\x47','\x43\x4d\x76\x48\x7a\x67\x31\x4c\x6c\x4e\x72\x34\x44\x61','\x43\x32\x6e\x59\x42\x32\x58\x53\x73\x67\x76\x50\x7a\x32\x48\x30','\x42\x67\x66\x5a\x44\x65\x6e\x4f\x41\x77\x58\x4b','\x43\x78\x76\x4c\x43\x4e\x4c\x74\x7a\x77\x58\x4c\x79\x33\x72\x56\x43\x47'];_0x586d=function(){return _0x509645;};return _0x586d();}const bat=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x62\x61\x74'),zone=document[_0x986c99(0x160)]('\x62\x6f\x6e\x75\x73\x5f\x7a\x6f\x6e\x65'),shell_box=document[_0x986c99(0x160)](_0x986c99(0x165)),shell_input=document[_0x986c99(0x160)]('\x73\x68\x65\x6c\x6c\x5f\x69\x6e\x70\x75\x74'),output_wrapper=document[_0x986c99(0x15e)]('\x2e\x6f\x75\x74\x70\x75\x74\x5f\x77\x72\x61\x70\x70\x65\x72'),ctf_box=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64']('\x63\x74\x66\x5f\x62\x6f\x78');bat[_0x986c99(0x169)]('\x63\x6c\x69\x63\x6b',()=>{const _0x5d9e75=_0x986c99;zone[_0x5d9e75(0x14f)][_0x5d9e75(0x16d)](_0x5d9e75(0x147)),shell_box[_0x5d9e75(0x14f)]['\x74\x6f\x67\x67\x6c\x65']('\x68\x69\x64\x65'),!ctf_box[_0x5d9e75(0x14f)]['\x63\x6f\x6e\x74\x61\x69\x6e\x73']('\x68\x69\x64\x65')&&document[_0x5d9e75(0x141)](_0x5d9e75(0x16b))[_0x5d9e75(0x150)](_0x217b56=>{const _0x6aea6c=_0x5d9e75;_0x217b56[_0x6aea6c(0x14f)][_0x6aea6c(0x16d)](_0x6aea6c(0x144));});}),shell_input[_0x986c99(0x169)]('\x6b\x65\x79\x64\x6f\x77\x6e',_0xdf1d51=>{const _0x2e5154=_0x986c99;if(_0xdf1d51['\x6b\x65\x79']===_0x2e5154(0x149)&&shell_input[_0x2e5154(0x16c)]){const _0x3b832d=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x2e5154(0x152));_0x3b832d[_0x2e5154(0x15f)]='\x24\x20'+shell_input[_0x2e5154(0x16c)],output_wrapper[_0x2e5154(0x14c)](_0x3b832d,output_wrapper[_0x2e5154(0x15d)]);const _0x2bf18a=shell_input[_0x2e5154(0x16c)][_0x2e5154(0x161)]()[_0x2e5154(0x16a)]('\x20');let _0x1037bd=document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x2e5154(0x152));if(cmds[_0x2bf18a[0x0]])_0x1037bd[_0x2e5154(0x15f)]=cmds[_0x2bf18a[0x0]];else{if(_0x2bf18a[0x0]==_0x2e5154(0x151)){if(_0x2bf18a[0x1]==_0x2e5154(0x15b)){const _0x23c2dc=['\x20',_0x2e5154(0x155),_0x2e5154(0x153),_0x2e5154(0x164),_0x2e5154(0x14d),_0x2e5154(0x155),'\x20'];_0x23c2dc[_0x2e5154(0x150)](_0x49312=>{const _0x4ba2ca=_0x2e5154,_0x178b64=document[_0x4ba2ca(0x158)](_0x4ba2ca(0x152));_0x178b64[_0x4ba2ca(0x15f)]=_0x49312,output_wrapper[_0x4ba2ca(0x14c)](_0x178b64);});}else _0x2bf18a[0x1]=='\x2e\x66\x6c\x61\x67\x2e\x74\x78\x74'?(shell_box[_0x2e5154(0x142)][_0x2e5154(0x159)]='\x30',setTimeout(()=>{const _0x3cefe8=_0x2e5154;ctf_box[_0x3cefe8(0x14f)][_0x3cefe8(0x16d)]('\x68\x69\x64\x65'),document[_0x3cefe8(0x141)](_0x3cefe8(0x16b))[_0x3cefe8(0x150)](_0x46cdbf=>{const _0x4d1eb5=_0x3cefe8;_0x46cdbf[_0x4d1eb5(0x14f)][_0x4d1eb5(0x16d)](_0x4d1eb5(0x144));});},0x3e8)):_0x1037bd[_0x2e5154(0x15f)]=_0x2e5154(0x140);}else{if(_0x2bf18a[0x0]=='\x6c\x73'){files=['\x72\x65\x61\x64\x6d\x65\x2e\x74\x78\x74','\x2e\x66\x6c\x61\x67\x2e\x74\x78\x74'];if(_0x2bf18a[0x1]&&_0x2bf18a[0x1][_0x2e5154(0x157)]('\x2d')){const _0x1e763b=_0x2bf18a[0x1][_0x2e5154(0x168)]('\x61'),_0x4e6dc2=_0x2bf18a[0x1]['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x6c');!_0x1e763b&&(files=[_0x2e5154(0x15b)]),_0x4e6dc2?files[_0x2e5154(0x150)](_0x2375ec=>{const _0x5a2b22=_0x2e5154,_0x411ce4=document[_0x5a2b22(0x158)](_0x5a2b22(0x152));_0x411ce4[_0x5a2b22(0x15f)]=_0x5a2b22(0x14a)+_0x2375ec,output_wrapper[_0x5a2b22(0x14c)](_0x411ce4);}):_0x1037bd[_0x2e5154(0x15f)]=files[_0x2e5154(0x167)]('\x20\x20');}else _0x1037bd[_0x2e5154(0x15f)]=_0x2e5154(0x15b);}else _0x2bf18a[0x0]==_0x2e5154(0x163)?output_wrapper[_0x2e5154(0x15f)]='':_0x1037bd[_0x2e5154(0x15f)]=_0x2e5154(0x148);}}output_wrapper[_0x2e5154(0x14c)](_0x1037bd),shell_input['\x76\x61\x6c\x75\x65']='',shell_box['\x73\x63\x72\x6f\x6c\x6c\x54\x6f\x70']=shell_box[_0x2e5154(0x15c)];}});
//NAV BURGER
document.getElementById('burger').addEventListener('click',()=>{
    document.querySelector('.nav_links').classList.toggle('nav_opened')
})


// LANGUAGES
async function set_lang(lang){
    const response = await fetch(`./static/lang/${lang}.json`);
    const json = await response.json();

    const dataset = document.querySelectorAll('[data-i18n]');
    dataset.forEach((el)=>{
        const dataset = el.getAttribute('data-i18n')
 
        const keys = dataset.split('.')
        const trad = keys.reduce((obj,key)=>{
            return obj[key];
        }, json)
        
        el.textContent = trad
    })

    document.documentElement.lang = lang;
}

function set_default_lang(){
    const browser_lang = navigator.language.split('-')[0];
    if (["fr","en","ja"].includes(browser_lang)){
        set_lang(browser_lang)
    } else {
        set_lang("en")
    }
}

set_default_lang()

//Fix Safari touch bug
const pro_boxes = document.querySelectorAll('.pro_box')
pro_boxes.forEach((box) => {
    box.addEventListener('touchstart', () => {
        box.classList.add('touched');
    });

    box.addEventListener('touchend', () => {
        box.classList.remove('touched');
    });

    box.addEventListener('touchcancel', () => {
        box.classList.remove('touched');
    });
});
