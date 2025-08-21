        // Quantum Loading System
        function initQuantumLoading() {
            let progress = 0;
            const progressBar = document.getElementById('quantumProgressBar');
            const percentageText = document.getElementById('quantumPercentage');
            const statusText = document.getElementById('quantumStatusText');
            const loadingOverlay = document.getElementById('quantumLoadingOverlay');
            const mainContent = document.querySelector('.main-content');
            
            const statusMessages = [
              "Innovative IT Solutions...",
              "Custom websites...",
              "Web developments...",
              "Enterprise applications...",
              "Software development...",
              "Digital transformation...",
              "Startup solutions...",
              "Welcome to Midcrib, ...",
            ];
            
            let messageIndex = 0;

            function updateProgress() {
                if (progress < 100) {
                    let increment;
                    if (progress < 20) increment = Math.random() * 8 + 2;
                    else if (progress < 50) increment = Math.random() * 6 + 1;
                    else if (progress < 80) increment = Math.random() * 4 + 0.5;
                    else increment = Math.random() * 2 + 0.2;
                    
                    progress = Math.min(progress + increment, 100);
                    
                    progressBar.style.width = progress + '%';
                    percentageText.textContent = Math.floor(progress) + '%';
                    
                    const targetMessageIndex = Math.floor((progress / 100) * statusMessages.length);
                    if (targetMessageIndex > messageIndex && targetMessageIndex < statusMessages.length) {
                        messageIndex = targetMessageIndex;
                        statusText.textContent = statusMessages[messageIndex];
                        statusText.style.animation = 'none';
                        setTimeout(() => {
                            statusText.style.animation = 'quantum-statusFade 3s ease-in-out infinite';
                        }, 50);
                    }
                    
                    const delay = progress < 30 ? 120 : progress < 70 ? 180 : 250;
                    setTimeout(updateProgress, delay);
                } else {
                    statusText.textContent = 'We Are The Future!';
                    setTimeout(() => {
                        loadingOverlay.style.opacity = '0';
                        loadingOverlay.style.transform = 'scale(1.1)';
                        
                        setTimeout(() => {
                            loadingOverlay.style.display = 'none';
                            mainContent.classList.add('loaded');
                        }, 1000);
                    }, 800);
                }
            }

            function createParticle() {
                const particle = document.createElement('div');
                particle.className = 'quantum-particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 4 + 's';
                particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
                loadingOverlay.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) particle.remove();
                }, 4000);
            }

            let mouseTrail = [];
            document.addEventListener('mousemove', (e) => {
                if (loadingOverlay.style.display === 'none') return;
                
                mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
                
                if (Math.random() < 0.3) {
                    createQuantumSparkle(e.clientX, e.clientY);
                }
                
                mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
            });

            function createQuantumSparkle(x, y) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'fixed';
                sparkle.style.left = x + 'px';
                sparkle.style.top = y + 'px';
                sparkle.style.width = '8px';
                sparkle.style.height = '8px';
                sparkle.style.background = `linear-gradient(45deg, #ff006e, #06ffa5)`;
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '1000000';
                sparkle.style.boxShadow = '0 0 20px currentColor';
                sparkle.style.animation = 'quantum-quantumSparkle 1.5s ease-out forwards';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) sparkle.remove();
                }, 1500);
            }

            // Start loading
            setTimeout(() => {
                updateProgress();
                const particleInterval = setInterval(() => {
                    if (loadingOverlay.style.display === 'none') {
                        clearInterval(particleInterval);
                        return;
                    }
                    createParticle();
                }, 300);
            }, 1000);

            // Disable context menu during loading
            const disableContext = (e) => e.preventDefault();
            document.addEventListener('contextmenu', disableContext);
            document.addEventListener('selectstart', disableContext);
            
            // Re-enable after loading
            setTimeout(() => {
                document.removeEventListener('contextmenu', disableContext);
                document.removeEventListener('selectstart', disableContext);
            }, 10000);
        }

        // Initialize loading when page loads
        window.addEventListener('load', initQuantumLoading);
        
        // Also initialize immediately if page is already loaded
        if (document.readyState === 'complete') {
            initQuantumLoading();
        }
    