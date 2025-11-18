/**
 * SALES WEBSITE CLASS
 * Modern JavaScript class untuk manage seluruh website
 * Kenapa pakai Class? Karena organized, reusable, dan maintainable
 */
class SalesWebsite {
    constructor() {
        // DATA PROFIL - Ganti dengan data kamu!
        this.currentUser = {
            name: "Syarifah Keisya Arzahra",
            title: "Automotive Sales Specialist",
            company: "Premium Auto Dealership",
            phone: "+628123456789",
            email: "john.doe@example.com",
            experience: "8+ years",
            carsSold: "350+",
            specialization: "Luxury & Family Vehicles",
            location: "Jakarta, Indonesia"
        };
        
        // SERVICES DATA - Apa yang kamu tawarkan
        this.services = [
            {
                icon: "fas fa-car",
                title: "New Car Sales",
                description: "Latest models dengan harga terbaik dan garansi resmi"
            },
            {
                icon: "fas fa-car-side", 
                title: "Used Car Sales",
                description: "Berkualitas dengan inspeksi lengkap dan harga kompetitif"
            },
            {
                icon: "fas fa-file-invoice-dollar",
                title: "Car Financing", 
                description: "Bantuan kredit dengan proses cepat dan bunga kompetitif"
            },
            {
                icon: "fas fa-sync-alt",
                title: "Trade-In Service",
                description: "Taksir dan tukar mobil lama Anda dengan nilai terbaik"
            }
        ];
        
        // TESTIMONIALS - Social proof untuk build trust
        this.testimonials = [
            {
                name: "Budi Santoso",
                role: "Business Owner", 
                content: "Pelayanan sangat profesional! John membantu saya menemukan mobil keluarga yang perfect.",
                rating: 5
            },
            {
                name: "Sari Dewi",
                role: "Corporate Executive",
                content: "Proses kredit sangat cepat dan mudah. Recommended banget!",
                rating: 5
            },
            {
                name: "Ahmad Rizki", 
                role: "Young Professional",
                content: "Pertama kali beli mobil dan John sangat membantu dari awal sampai akhir.",
                rating: 4
            }
        ];
        
        // Initialize website ketika class dibuat
        this.init();
    }

    /**
     * INITIALIZATION
     * Jalankan semua setup ketika website pertama kali load
     */
    init() {
        this.renderNavigation();
        this.renderHero(); 
        this.renderAbout();
        this.renderServices();
        this.renderTestimonials();
        this.renderContact();
        this.renderFooter();
        this.setupEventListeners();
        
        console.log("🚗 Sales website initialized!");
    }

    /**
     * RENDER NAVIGATION
     * Navigation bar yang responsive (berubah di mobile)
     */
    renderNavigation() {
        const navbar = document.getElementById('navbar');
        navbar.innerHTML = `
            <!-- Main Navigation -->
            <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center py-4">
                        <!-- Logo & Brand -->
                        <div class="flex items-center">
                            <i class="fas fa-car text-2xl text-blue-600 mr-3"></i>
                            <div>
                                <span class="font-bold text-xl text-gray-800">${this.currentUser.name}</span>
                                <p class="text-xs text-gray-500">${this.currentUser.title}</p>
                            </div>
                        </div>
                        
                        <!-- Desktop Menu - Tampil di layar besar -->
                        <div class="hidden md:flex space-x-8 items-center">
                            <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                            <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
                            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                            
                            <!-- WhatsApp Button -->
                            <a href="https://wa.me/${this.currentUser.phone}" 
                               class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
                                <i class="fab fa-whatsapp mr-2"></i>
                                Chat Now
                            </a>
                        </div>

                        <!-- Mobile Menu Button - Tampil di layar kecil -->
                        <button class="md:hidden text-gray-700 focus:outline-none" id="mobileMenuBtn">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Menu (Hidden by default) -->
                    <div class="md:hidden hidden bg-white py-4 border-t" id="mobileMenu">
                        <div class="flex flex-col space-y-4">
                            <a href="#home" class="text-gray-700 hover:text-blue-600 py-2 font-medium">Home</a>
                            <a href="#about" class="text-gray-700 hover:text-blue-600 py-2 font-medium">About</a>
                            <a href="#services" class="text-gray-700 hover:text-blue-600 py-2 font-medium">Services</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-blue-600 py-2 font-medium">Reviews</a>
                            <a href="#contact" class="text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</a>
                            <a href="https://wa.me/${this.currentUser.phone}" 
                               class="bg-green-500 text-white text-center py-3 rounded-lg font-medium">
                                <i class="fab fa-whatsapp mr-2"></i>Chat WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    /**
     * HERO SECTION
     * First impression - yang pertama dilihat visitor
     */
    renderHero() {
        const hero = document.getElementById('hero');
        hero.innerHTML = `
            <section id="home" class="pt-24 bg-gradient-to-br from-blue-50 to-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <!-- Left Column - Content -->
                        <div class="text-center md:text-left">
                            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Find Your Perfect 
                                <span class="text-blue-600">Car</span>
                            </h1>
                            
                            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                                Hi, I'm <span class="font-semibold">${this.currentUser.name}</span>. 
                                With ${this.currentUser.experience} in automotive sales, 
                                I'll help you find the perfect vehicle that matches your needs and budget.
                            </p>
                            
                            <!-- Stats - Build credibility -->
                            <div class="flex justify-center md:justify-start space-x-8 mb-8">
                                <div class="text-center">
                                    <div class="text-2xl md:text-3xl font-bold text-blue-600">${this.currentUser.carsSold}</div>
                                    <div class="text-sm text-gray-500">Cars Sold</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl md:text-3xl font-bold text-blue-600">${this.currentUser.experience}</div>
                                    <div class="text-sm text-gray-500">Experience</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl md:text-3xl font-bold text-blue-600">100%</div>
                                    <div class="text-sm text-gray-500">Satisfied</div>
                                </div>
                            </div>
                            
                            <!-- Call to Action Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#contact" 
                                   class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center hover-lift">
                                    Get Free Consultation
                                </a>
                                <a href="tel:${this.currentUser.phone}" 
                                   class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                                    <i class="fas fa-phone mr-2"></i>Call Now
                                </a>
                            </div>
                        </div>
                        
                        <!-- Right Column - Visual -->
                        <div class="relative order-first md:order-last">
                            <!-- Placeholder untuk foto kamu -->
                            <div class="rounded-2xl w-full h-80 md:h-96 overflow-hidden shadow-xl">
                                <img 
                                    src="assets/images/photo_profile.jpeg" 
                                    alt="${this.currentUser.name} - ${this.currentUser.title}"
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                >
                            </div>
                            
                            <!-- Floating trust badge -->
                            <div class="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                                <div class="flex items-center">
                                    <i class="fas fa-shield-alt text-green-500 text-xl mr-2"></i>
                                    <div>
                                        <div class="font-semibold text-gray-800">Trusted</div>
                                        <div class="text-xs text-gray-500">Professional</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * ABOUT SECTION
     * Ceritakan tentang diri dan expertise
     */
    renderAbout() {
        const about = document.getElementById('about');
        about.innerHTML = `
            <section id="about" class="py-16 md:py-24 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Me?</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            As your personal automotive consultant, I provide end-to-end service to ensure 
                            you drive home with the perfect vehicle.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Expertise Card 1 -->
                        <div class="text-center p-8 bg-gray-50 rounded-2xl hover-lift">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-medal text-2xl text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
                            <p class="text-gray-600 leading-relaxed">
                                ${this.currentUser.experience} of experience helping clients find their ideal vehicles. 
                                I understand the market and can negotiate the best deals for you.
                            </p>
                        </div>
                        
                        <!-- Expertise Card 2 -->
                        <div class="text-center p-8 bg-gray-50 rounded-2xl hover-lift">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-car text-2xl text-green-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Wide Selection</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Access to extensive inventory including new arrivals, certified pre-owned, 
                                and exclusive models from various brands.
                            </p>
                        </div>
                        
                        <!-- Expertise Card 3 -->
                        <div class="text-center p-8 bg-gray-50 rounded-2xl hover-lift">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-handshake text-2xl text-purple-600"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4">After-Sales Support</h3>
                            <p class="text-gray-600 leading-relaxed">
                                My service doesn't end at delivery. I provide ongoing support for maintenance, 
                                insurance, and any future vehicle needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * SERVICES SECTION
     * Tunjukkan apa yang kamu tawarkan
     */
    renderServices() {
        const services = document.getElementById('services');
        services.innerHTML = `
            <section id="services" class="py-16 md:py-24 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive automotive solutions tailored to your specific needs and preferences.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${this.services.map(service => `
                            <div class="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <i class="${service.icon} text-blue-600 text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-3">${service.title}</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">${service.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * TESTIMONIALS SECTION
     * Social proof - testimoni dari client sebelumnya
     */
    renderTestimonials() {
        const testimonials = document.getElementById('testimonials');
        testimonials.innerHTML = `
            <section id="testimonials" class="py-16 md:py-24 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
                        <p class="text-xl text-gray-600">Don't just take my word for it</p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        ${this.testimonials.map(testimonial => `
                            <div class="bg-gray-50 rounded-2xl p-6 hover-lift">
                                <!-- Star Ratings -->
                                <div class="flex mb-4">
                                    ${Array.from({length: 5}, (_, i) => `
                                        <i class="fas fa-star ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1"></i>
                                    `).join('')}
                                </div>
                                
                                <!-- Testimonial Content -->
                                <p class="text-gray-700 mb-6 italic">"${testimonial.content}"</p>
                                
                                <!-- Client Info -->
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-user text-blue-600"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-900">${testimonial.name}</div>
                                        <div class="text-sm text-gray-500">${testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * CONTACT SECTION
     * Call to action - bagaimana client bisa hubungi kamu
     */
    renderContact() {
        const contact = document.getElementById('contact');
        contact.innerHTML = `
            <section id="contact" class="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
                        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
                            Let's discuss your needs and find the perfect vehicle for you. 
                            I'm here to make your car buying experience smooth and enjoyable.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-12">
                        <!-- Contact Information -->
                        <div>
                            <h3 class="text-2xl font-bold mb-8">Get In Touch</h3>
                            
                            <div class="space-y-6">
                                <!-- Phone -->
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <div class="text-blue-200 text-sm">Phone</div>
                                        <a href="tel:${this.currentUser.phone}" class="text-white font-semibold text-lg hover:text-blue-200 transition-colors">
                                            ${this.currentUser.phone}
                                        </a>
                                    </div>
                                </div>
                                
                                <!-- WhatsApp -->
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                        <i class="fab fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div class="text-blue-200 text-sm">WhatsApp</div>
                                        <a href="https://wa.me/${this.currentUser.phone}" class="text-white font-semibold text-lg hover:text-blue-200 transition-colors">
                                            Chat Directly
                                        </a>
                                    </div>
                                </div>
                                
                                <!-- Email -->
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div class="text-blue-200 text-sm">Email</div>
                                        <a href="mailto:${this.currentUser.email}" class="text-white font-semibold text-lg hover:text-blue-200 transition-colors">
                                            ${this.currentUser.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <!-- Location -->
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <div class="text-blue-200 text-sm">Location</div>
                                        <div class="text-white font-semibold text-lg">${this.currentUser.location}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Quick Action Buttons for Mobile -->
                            <div class="flex flex-col space-y-4 mt-8 md:hidden">
                                <a href="tel:${this.currentUser.phone}" 
                                   class="bg-white text-blue-600 py-4 px-6 rounded-lg text-center font-semibold hover:bg-gray-100 transition-colors">
                                    <i class="fas fa-phone mr-2"></i>Call Now
                                </a>
                                <a href="https://wa.me/${this.currentUser.phone}" 
                                   class="bg-green-500 text-white py-4 px-6 rounded-lg text-center font-semibold hover:bg-green-600 transition-colors">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp
                                </a>
                            </div>
                        </div>
                        
                        <!-- Contact Form -->
                        <div>
                            <h3 class="text-2xl font-bold mb-8">Send Message</h3>
                            
                            <form id="contactForm" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-blue-200 text-sm font-medium mb-2">Your Name</label>
                                    <input type="text" id="name" name="name" 
                                           class="w-full px-4 py-3 rounded-lg bg-blue-500 border border-blue-400 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                           placeholder="Enter your name" required>
                                </div>
                                
                                <div>
                                    <label for="phone" class="block text-blue-200 text-sm font-medium mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" 
                                           class="w-full px-4 py-3 rounded-lg bg-blue-500 border border-blue-400 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                           placeholder="+62 xxx-xxxx-xxxx" required>
                                </div>
                                
                                <div>
                                    <label for="interest" class="block text-blue-200 text-sm font-medium mb-2">I'm Interested In</label>
                                    <select id="interest" name="interest" 
                                            class="w-full px-4 py-3 rounded-lg bg-blue-500 border border-blue-400 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent" required>
                                        <option value="" class="text-gray-700">Select an option</option>
                                        <option value="New Car" class="text-gray-700">New Car</option>
                                        <option value="Used Car" class="text-gray-700">Used Car</option>
                                        <option value="Car Financing" class="text-gray-700">Car Financing</option>
                                        <option value="Test Drive" class="text-gray-700">Test Drive</option>
                                        <option value="Trade-In" class="text-gray-700">Trade-In Service</option>
                                        <option value="Other" class="text-gray-700">Other</option>
                                    </select>
                                </div>
                                
                                <button type="submit" 
                                        class="w-full bg-white text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                                    Send Message
                                </button>
                                
                                <p class="text-blue-200 text-sm text-center">
                                    I'll contact you within 24 hours
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * FOOTER
     * Additional information dan copyright
     */
    renderFooter() {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <footer class="bg-gray-900 text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-3 gap-8 items-center">
                        <!-- Brand -->
                        <div class="text-center md:text-left">
                            <div class="flex items-center justify-center md:justify-start">
                                <i class="fas fa-car text-2xl text-blue-400 mr-3"></i>
                                <span class="font-bold text-xl">${this.currentUser.name}</span>
                            </div>
                            <p class="text-gray-400 mt-2">${this.currentUser.title}</p>
                        </div>
                        
                        <!-- Quick Links -->
                        <div class="text-center">
                            <div class="flex justify-center space-x-6">
                                <a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a>
                                <a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a>
                                <a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a>
                                <a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="text-center md:text-right">
                            <div class="flex justify-center md:justify-end space-x-4">
                                <a href="https://wa.me/${this.currentUser.phone}" class="text-gray-400 hover:text-green-400 transition-colors">
                                    <i class="fab fa-whatsapp text-xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i class="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors">
                                    <i class="fab fa-instagram text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p class="text-gray-400">
                            &copy; 2024 ${this.currentUser.name}. All rights reserved. 
                            Professional automotive sales consultant.
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }

    /**
     * EVENT LISTENERS
     * Handle semua interaksi user
     */
    setupEventListeners() {
        // Smooth scroll untuk navigation links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('#mobileMenuBtn')) {
                const mobileMenu = document.getElementById('mobileMenu');
                mobileMenu.classList.toggle('hidden');
            }
        });

        // Close mobile menu ketika klik di luar
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && !e.target.closest('#mobileMenuBtn')) {
                const mobileMenu = document.getElementById('mobileMenu');
                mobileMenu.classList.add('hidden');
            }
        });

        // Contact form handler
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Improve touch experience untuk mobile
        this.improveTouchExperience();
    }

    /**
     * HANDLE FORM SUBMISSION
     * Process ketika user submit contact form
     */
    async handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            interest: formData.get('interest')
        };

        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;

        try {
            // Try to send to backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Thank you! I will contact you within 24 hours.');
                e.target.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            // Fallback: redirect to WhatsApp
            const message = `Hi, I'm ${data.name}. I'm interested in ${data.interest}. Please contact me at ${data.phone}`;
            const whatsappUrl = `https://wa.me/${this.currentUser.phone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            e.target.reset();
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    /**
     * IMPROVE TOUCH EXPERIENCE
     * Optimasi untuk mobile devices
     */
    improveTouchExperience() {
        // Add touch-friendly styles
        document.querySelectorAll('button, a').forEach(element => {
            element.style.webkitTapHighlightColor = 'transparent';
        });
    }
}

/**
 * INITIALIZE WEBSITE
 * Jalankan ketika DOM fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    new SalesWebsite();
});

// Add custom styles untuk better mobile experience
const style = document.createElement('style');
style.textContent = `
    /* Loading animation */
    .fa-spinner { 
        animation: spin 1s linear infinite; 
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Improve mobile scrolling */
    @media (max-width: 768px) {
        html { 
            scroll-behavior: smooth;
        }
        
        /* Prevent zoom on input focus */
        input, select, textarea { 
            font-size: 16px; 
        }
    }
`;
document.head.appendChild(style);