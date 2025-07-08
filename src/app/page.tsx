"use client"

import type React from "react"
import { useState } from "react"

export default function Home() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [isFullMenuModalOpen, setIsFullMenuModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })

  const openReservationModal = () => {
    setIsReservationModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeReservationModal = () => {
    setIsReservationModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const openFullMenuModal = () => {
    setIsFullMenuModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeFullMenuModal = () => {
    setIsFullMenuModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReservationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Reservation confirmed for ${reservationData.name} on ${reservationData.date} at ${reservationData.time} for ${reservationData.guests} guests. We'll contact you at ${reservationData.email} to confirm!`,
    )

    setReservationData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    })
    closeReservationModal()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const fullMenuData = {
    appetizers: [
      {
        name: "Samosa (2 pcs)",
        price: "₹80",
        description: "Crispy pastry filled with spiced potatoes and peas",
        veg: true,
      },
      { name: "Chicken Tikka", price: "₹320", description: "Marinated chicken grilled in tandoor", spice: "medium" },
      { name: "Paneer Tikka", price: "₹280", description: "Cottage cheese cubes marinated and grilled", veg: true },
      { name: "Aloo Tikki", price: "₹120", description: "Spiced potato patties served with chutneys", veg: true },
      { name: "Seekh Kebab", price: "₹350", description: "Minced lamb skewers with aromatic spices", spice: "hot" },
    ],
    mainCourses: [
      {
        name: "Butter Chicken",
        price: "₹450",
        description: "Tender chicken in rich tomato and cream gravy",
        spice: "mild",
      },
      {
        name: "Chicken Biryani",
        price: "₹380",
        description: "Fragrant basmati rice layered with spiced chicken",
        spice: "medium",
      },
      { name: "Dal Makhani", price: "₹280", description: "Creamy black lentils slow-cooked with butter", veg: true },
      { name: "Palak Paneer", price: "₹320", description: "Cottage cheese in spiced spinach gravy", veg: true },
      { name: "Lamb Rogan Josh", price: "₹520", description: "Kashmiri lamb curry with aromatic spices", spice: "hot" },
      { name: "Fish Curry", price: "₹480", description: "Fresh fish in coconut and spice curry", spice: "medium" },
      { name: "Chole Bhature", price: "₹250", description: "Spiced chickpeas with fried bread", veg: true },
      { name: "Rajma", price: "₹240", description: "Red kidney beans in thick gravy", veg: true },
    ],
    breads: [
      { name: "Naan", price: "₹60", description: "Traditional leavened bread", veg: true },
      { name: "Garlic Naan", price: "₹80", description: "Naan topped with garlic and herbs", veg: true },
      { name: "Butter Naan", price: "₹70", description: "Naan brushed with butter", veg: true },
      { name: "Roti", price: "₹40", description: "Whole wheat flatbread", veg: true },
      { name: "Paratha", price: "₹50", description: "Layered flatbread", veg: true },
      { name: "Kulcha", price: "₹90", description: "Stuffed bread with onions or potatoes", veg: true },
    ],
    rice: [
      { name: "Jeera Rice", price: "₹180", description: "Basmati rice with cumin", veg: true },
      { name: "Vegetable Biryani", price: "₹320", description: "Fragrant rice with mixed vegetables", veg: true },
      { name: "Mutton Biryani", price: "₹450", description: "Aromatic rice with tender mutton", spice: "medium" },
      { name: "Plain Rice", price: "₹120", description: "Steamed basmati rice", veg: true },
    ],
    southIndian: [
      { name: "Masala Dosa", price: "₹180", description: "Crispy rice crepe with potato filling", veg: true },
      { name: "Plain Dosa", price: "₹140", description: "Crispy rice and lentil crepe", veg: true },
      { name: "Idli (4 pcs)", price: "₹120", description: "Steamed rice cakes with sambar and chutney", veg: true },
      { name: "Vada (3 pcs)", price: "₹100", description: "Fried lentil donuts", veg: true },
      { name: "Uttapam", price: "₹160", description: "Thick pancake with vegetables", veg: true },
    ],
    desserts: [
      { name: "Gulab Jamun (2 pcs)", price: "₹120", description: "Milk dumplings in sugar syrup", veg: true },
      { name: "Rasmalai (2 pcs)", price: "₹140", description: "Cottage cheese dumplings in sweet milk", veg: true },
      { name: "Kulfi", price: "₹100", description: "Traditional Indian ice cream", veg: true },
      { name: "Gajar Halwa", price: "₹130", description: "Carrot pudding with nuts", veg: true },
      { name: "Ras Gulla (3 pcs)", price: "₹110", description: "Spongy cottage cheese balls in syrup", veg: true },
    ],
    beverages: [
      { name: "Masala Chai", price: "₹40", description: "Spiced Indian tea", veg: true },
      { name: "Lassi (Sweet/Salt)", price: "₹80", description: "Traditional yogurt drink", veg: true },
      { name: "Mango Lassi", price: "₹100", description: "Yogurt drink with mango", veg: true },
      { name: "Fresh Lime Water", price: "₹60", description: "Fresh lime with water", veg: true },
      { name: "Buttermilk", price: "₹70", description: "Spiced yogurt drink", veg: true },
      { name: "Filter Coffee", price: "₹50", description: "South Indian style coffee", veg: true },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">🌶️ Indian Spices</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Desktop Reserve Button */}
            <button
              onClick={openReservationModal}
              className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Reserve Table
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 w-full text-left"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 w-full text-left"
                >
                  Contact
                </button>
                <button
                  onClick={openReservationModal}
                  className="block w-full text-left px-3 py-2 text-base font-medium bg-orange-600 text-white rounded-md hover:bg-orange-700 mt-2"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=800&fit=crop')",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-400">Indian Spices</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Authentic Indian flavors in the heart of Mumbai</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openReservationModal}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Make Reservation
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Master Chefs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Indian Spices has been serving authentic Indian cuisine with a passion for traditional
                spices and time-honored recipes. Our team of master chefs brings generations of culinary expertise from
                different regions of India to create an unforgettable dining experience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {`Located in the heart of Mumbai's Bandra district, we pride ourselves on preserving the authentic flavors
                of Indian cuisine while creating a warm, welcoming atmosphere. From North Indian tandoor specialties to
                South Indian delicacies, every dish tells a story.`}
              </p>
              <div className="flex items-center text-gray-700">
                <span className="text-orange-600 mr-2">🕐</span>
                <span>Open Daily 12PM - 11PM</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=500&fit=crop"
                alt="Indian restaurant interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  <span className="font-semibold">4.8/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">Based on 800+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Indian Dishes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the authentic flavors of India with our carefully crafted traditional recipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Butter Chicken */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
                  alt="Butter Chicken"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  North Indian
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Butter Chicken</h3>
                  <span className="text-xl font-bold text-orange-600">₹450</span>
                </div>
                <p className="text-gray-600">Tender chicken in rich tomato and cream gravy with aromatic spices</p>
              </div>
            </div>

            {/* Biryani */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
                  alt="Chicken Biryani"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  Hyderabadi
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Chicken Biryani</h3>
                  <span className="text-xl font-bold text-orange-600">₹380</span>
                </div>
                <p className="text-gray-600">Fragrant basmati rice layered with spiced chicken and saffron</p>
              </div>
            </div>

            {/* Paneer Tikka */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
                  alt="Paneer Tikka"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  Vegetarian
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Paneer Tikka</h3>
                  <span className="text-xl font-bold text-orange-600">₹320</span>
                </div>
                <p className="text-gray-600">Marinated cottage cheese grilled to perfection in tandoor</p>
              </div>
            </div>

            {/* Dal Makhani */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
                  alt="Dal Makhani"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  Punjabi
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Dal Makhani</h3>
                  <span className="text-xl font-bold text-orange-600">₹280</span>
                </div>
                <p className="text-gray-600">Creamy black lentils slow-cooked with butter and cream</p>
              </div>
            </div>

            {/* Masala Dosa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop"
                  alt="Masala Dosa"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  South Indian
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Masala Dosa</h3>
                  <span className="text-xl font-bold text-orange-600">₹180</span>
                </div>
                <p className="text-gray-600">Crispy rice crepe filled with spiced potato curry, served with chutney</p>
              </div>
            </div>

            {/* Gulab Jamun */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Gulab Jamun"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
                  Dessert
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Gulab Jamun</h3>
                  <span className="text-xl font-bold text-orange-600">₹120</span>
                </div>
                <p className="text-gray-600">Soft milk dumplings soaked in cardamom-flavored sugar syrup</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={openFullMenuModal}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {`We're located in the heart of Mumbai's Bandra district. Come experience authentic Indian cuisine and warm
              hospitality.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600">123 Linking Road</p>
              <p className="text-gray-600">Bandra West</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400050</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+912226431234" className="hover:text-orange-600 transition-colors">
                  +91 22 2643 1234
                </a>
              </p>
              <p className="text-gray-600">
                <a href="tel:+919876543210" className="hover:text-orange-600 transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-1">Reservations & Inquiries</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@indianspices.in" className="hover:text-orange-600 transition-colors">
                  info@indianspices.in
                </a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:reservations@indianspices.in" className="hover:text-orange-600 transition-colors">
                  reservations@indianspices.in
                </a>
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🕐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hours</h3>
              <p className="text-gray-600">Monday - Sunday</p>
              <p className="text-gray-600">12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Indian Spices Restaurant. All rights reserved.</p>
        </div>
      </footer>

      {/* Full Menu Modal */}
      {isFullMenuModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">Complete Menu</h2>
              <button onClick={closeFullMenuModal} className="text-gray-400 hover:text-gray-600 text-3xl">
                ×
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Appetizers */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🥗 Appetizers
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.appetizers.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          {item.veg && <span className="text-green-600 text-xs">🌱 VEG</span>}
                          {item.spice === "mild" && <span className="text-green-500 text-xs">🌶️ MILD</span>}
                          {item.spice === "medium" && <span className="text-yellow-500 text-xs">🌶️🌶️ MEDIUM</span>}
                          {item.spice === "hot" && <span className="text-red-500 text-xs">🌶️🌶️🌶️ HOT</span>}
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Courses */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🍛 Main Courses
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.mainCourses.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          {item.veg && <span className="text-green-600 text-xs">🌱 VEG</span>}
                          {item.spice === "mild" && <span className="text-green-500 text-xs">🌶️ MILD</span>}
                          {item.spice === "medium" && <span className="text-yellow-500 text-xs">🌶️🌶️ MEDIUM</span>}
                          {item.spice === "hot" && <span className="text-red-500 text-xs">🌶️🌶️🌶️ HOT</span>}
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Breads */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🥖 Indian Breads
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.breads.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-green-600 text-xs">🌱 VEG</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rice Dishes */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🍚 Rice Dishes
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.rice.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          {item.veg && <span className="text-green-600 text-xs">🌱 VEG</span>}
                          {item.spice === "medium" && <span className="text-yellow-500 text-xs">🌶️🌶️ MEDIUM</span>}
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* South Indian */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🥞 South Indian
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.southIndian.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-green-600 text-xs">🌱 VEG</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desserts */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🍮 Desserts
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.desserts.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-green-600 text-xs">🌱 VEG</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beverages */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
                  🥤 Beverages
                </h3>
                <div className="grid gap-3">
                  {fullMenuData.beverages.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-green-600 text-xs">🌱 VEG</span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-bold text-orange-600 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t p-6 text-center">
              <p className="text-gray-600 mb-4">
                All prices are inclusive of taxes. We accept cash and all major cards.
              </p>
              <button
                onClick={openReservationModal}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {isReservationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Make a Reservation</h2>
              <button onClick={closeReservationModal} className="text-gray-400 hover:text-gray-600 text-2xl">
                ×
              </button>
            </div>

            <form onSubmit={handleReservationSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={reservationData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={reservationData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={reservationData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={reservationData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={reservationData.time}
                    onChange={handleInputChange}
                    min="12:00"
                    max="22:00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={reservationData.guests}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={reservationData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any dietary restrictions, spice preferences, or special occasions?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-semibold transition-colors"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
