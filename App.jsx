import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ApartamentoFondal() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dates: "",
    guests: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tu solicitud de reserva se ha enviado. Te contactaremos pronto.");
    setForm({ name: "", email: "", dates: "", guests: "", comments: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center" style={{ backgroundImage: "url('/fondal1.jpg')" }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Apartamento A Casa do Fondal</h1>
          <p className="text-lg mb-6">Un apartamento con todos los servicios en un entorno único de las Rías Altas gallegas. Descanso, comodidad y proximidad.</p>
          <a href="#reserva" className="bg-white text-black px-6 py-3 rounded-xl shadow font-semibold">Reservar ahora</a>
        </motion.div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Galería</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/fondal1.jpg" alt="Salón" className="rounded-2xl shadow" />
          <img src="/fondal2.jpg" alt="Cocina" className="rounded-2xl shadow" />
          <img src="/fondal3.jpg" alt="Comedor" className="rounded-2xl shadow" />
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Detalles del alojamiento</h2>
          <p className="mb-4">Capacidad: 4 huéspedes</p>
          <p className="mb-4">Reservas mínimas: 3 noches / Semana / Quincena</p>
          <p className="mb-4">A 300 metros de la playa de Perbes en Miño</p>
          <p className="mb-4">Entorno de playas y aldea rural gallega, con restaurantes de playa y urbanos en Miño y Pontedeume.</p>
        </div>
      </section>

      <section id="reserva" className="py-12 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Solicitud de Reserva</h2>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
            <input type="text" name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Tu correo electrónico" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
            <input type="text" name="dates" placeholder="Fechas de estancia" value={form.dates} onChange={handleChange} required className="w-full border p-2 rounded" />
            <input type="number" name="guests" placeholder="Número de huéspedes" value={form.guests} onChange={handleChange} required className="w-full border p-2 rounded" />
            <textarea name="comments" placeholder="Comentarios adicionales" value={form.comments} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
            <button type="submit" className="bg-black text-white w-full py-2 rounded-xl">Enviar solicitud</button>
          </form>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
          <p className="flex justify-center items-center gap-2"><Phone /> 654 74 15 82</p>
          <p className="flex justify-center items-center gap-2"><Mail /> doblejfc@gmail.com</p>
          <p className="flex justify-center items-center gap-2"><MapPin /> Avenida Carmen Estevez 36, Miño (A Coruña)</p>
          <a href="https://wa.me/34654741582" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl">Reservar por WhatsApp</a>
        </div>
      </section>
    </div>
  );
}