
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=>{ document.getElementById("loading-screen").style.display="none"; },2000);

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