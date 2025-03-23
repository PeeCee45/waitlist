import { useEffect } from "react";

export function HeroTextChanger(arg:any) {
    useEffect(() => {
        const _streamFill = document.getElementsByClassName('sliding-text-container')[0] as HTMLElement;
            
        if (!_streamFill) return; // Ensure the element exists
    
        const _transformStreamText = arg;
    
        _streamFill.innerHTML = ""; // Clear existing content
    
        _transformStreamText.forEach((e: string | null) => {
            const span = document.createElement("span");
            span.className = "_dtext";
            span.textContent = e;
            _streamFill.appendChild(span);
        });
    
        let text_index = 1; //Counter: counts the number of times text scrolls
        function easeScrollTo(element:any, target:any, duration = 1000) {
            const start = element.scrollTop;
            const change = target - start;
            const startTime = performance.now();
        
            function easeOutQuad(t:any) {
                return t * (2 - t); // Custom easing function
            }
        
            function animateScroll(timestamp:any) {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                element.scrollTop = start + change * easeOutQuad(progress);
        
                if (elapsed < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }
        
            requestAnimationFrame(animateScroll);
        }
        function scrollText() {
            if (_streamFill.offsetHeight > 0) {
            if(_streamFill.scrollTop < (_streamFill.scrollHeight-_streamFill.offsetHeight -2)) {
                easeScrollTo(_streamFill, _streamFill.offsetHeight * text_index, 1200);
                text_index++;
            }else {
                _streamFill.scrollTo({top: 0});
                text_index=1;
            }
            }
        }
    
        const interval = setInterval(scrollText, 5000);
        return () => {
            clearInterval(interval); 
        };
    },[])
}






export function objectEasingIn(){
    useEffect(() => {
        if (typeof window !== "undefined") {
            const sections = document.querySelectorAll(".fade-section");
        
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                  }
                });
              },
              { threshold: 0.1 }
            );
        
            sections.forEach((section) => observer.observe(section));
        
            
            return () => {
              sections.forEach((section) => observer.unobserve(section)) 
            };
        }
    },[])
}

const createConfetti = (displ: HTMLElement) => {
    let confettiContainer = displ.querySelector(".confetti-container");

    if (!confettiContainer) {
        confettiContainer = document.createElement("div");
        confettiContainer.classList.add("confetti-container");
        displ.appendChild(confettiContainer);
    }

    confettiContainer.innerHTML = "";

    for (let i = 0; i < 15; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * 50}px`;

        const colors = ["#ff4081", "#ffcc00", "#4caf50", "#00bcd4", "#e91e63"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] as any;

        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";

        confetti.style.setProperty("--x", `${Math.random() * 40 - 20}px`);

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.style.animation = "confetti-fall 1s ease-out forwards";
        }, Math.random() * 300);
    }
};

export function useConfettiEffect(){
    useEffect(() => {
        const targetDisps = document.querySelectorAll<HTMLElement>(".confetti-disp");

        const handleMouseEnter = (event: any) => {
            const targetDisp = event.currentTarget as HTMLElement;
            createConfetti(targetDisp as any);
        };

        targetDisps.forEach((targetDisp) => {
            targetDisp.addEventListener("mouseenter", handleMouseEnter);
        });

        return () => {
            targetDisps.forEach((targetDisp) => {
            targetDisp.removeEventListener("mouseenter", handleMouseEnter);
            });
        };
    }, []);
};
export function useConfettiEffectOnLoad() {
    useEffect(() => {
        const targetDispsInfinite = document.querySelectorAll<HTMLElement>(".confetti-disp-infinite");

        targetDispsInfinite.forEach((targetDisp) => {
            createConfetti(targetDisp);
        });
    }, []);
};
