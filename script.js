
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=>{ document.getElementById("loading-screen").style.display="none"; },1000);

    new Swiper('.swiper', { pagination:{el:'.swiper-pagination'}, loop:true });

    const gradDate = new Date("2025-12-13T16:00:00").getTime();
    setInterval(()=>{
        let now = new Date().getTime();
        let diff = gradDate - now;
        let d = Math.floor(diff/(1000*60*60*24));
        let h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        let m = Math.floor((diff%(1000*60*60))/ (1000*60));
        let s = Math.floor((diff%(1000*60))/1000);
        document.getElementById("days").innerText=d;
        document.getElementById("hours").innerText=h;
        document.getElementById("minutes").innerText=m;
        document.getElementById("seconds").innerText=s;
    },1000);

    const canvas=document.getElementById("particles");
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth; canvas.height=300;
    let particles=[];
    for(let i=0;i<40;i++){particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        vx:(Math.random()-0.5)*0.5,
        vy:(Math.random()-0.5)*0.5
    });}
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
            p.x+=p.vx; p.y+=p.vy;
            if(p.x<0||p.x>canvas.width)p.vx*=-1;
            if(p.y<0||p.y>canvas.height)p.vy*=-1;
            ctx.fillStyle="#4db8ff"; ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill();
            particles.forEach(other=>{
                let dx=p.x-other.x, dy=p.y-other.y;
                let dist=Math.sqrt(dx*dx+dy*dy);
                if(dist<120){
                    ctx.strokeStyle="rgba(77,184,255,"+(1-dist/120)+")";
                    ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(other.x,other.y); ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();

    const canvas2=document.getElementById("particles2");
    const ctx2=canvas2.getContext("2d");
    canvas2.width=window.innerWidth; canvas2.height=300;
    let particles2=[];
    for(let i=0;i<40;i++){particles2.push({
        x:Math.random()*canvas2.width,
        y:Math.random()*canvas2.height,
        vx:(Math.random()-0.5)*0.5,
        vy:(Math.random()-0.5)*0.5
    });}
    function animate2(){
        ctx2.clearRect(0,0,canvas2.width,canvas2.height);
        particles2.forEach(p=>{
            p.x+=p.vx; p.y+=p.vy;
            if(p.x<0||p.x>canvas2.width)p.vx*=-1;
            if(p.y<0||p.y>canvas2.height)p.vy*=-1;
            ctx2.fillStyle="#4db8ff"; ctx2.beginPath(); ctx2.arc(p.x,p.y,3,0,Math.PI*2); ctx2.fill();
            particles2.forEach(other=>{
                let dx=p.x-other.x, dy=p.y-other.y;
                let dist=Math.sqrt(dx*dx+dy*dy);
                if(dist<120){
                    ctx2.strokeStyle="rgba(77,184,255,"+(1-dist/120)+")";
                    ctx2.beginPath(); ctx2.moveTo(p.x,p.y); ctx2.lineTo(other.x,other.y); ctx2.stroke();
                }
            });
        });
        requestAnimationFrame(animate2);
    }
    animate2();
});


document.querySelectorAll(".timeline .item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
    }
});

const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".album-img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
    });
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});