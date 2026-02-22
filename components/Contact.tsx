import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactProps {
	contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
	return (
		<section id="contact" className="py-24 relative bg-[#050507]">
			<div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto bg-neon-card rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
					<div className="text-center mb-10">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							¿Listo para empezar un proyecto?
						</h2>
						<p className="text-gray-400">
							Hablemos de cómo puedo ayudar a tu equipo o negocio.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-8">
							<ContactItem
								icon={<Mail className="text-neon-cyan" />}
								title="Email"
								value={contactInfo.email}
							/>
							<ContactItem
								icon={<Phone className="text-neon-green" />}
								title="Teléfono"
								value={contactInfo.phone}
							/>
							<ContactItem
								icon={<MapPin className="text-neon-purple" />}
								title="Ubicación"
								value={contactInfo.location}
							/>
						</div>

						<form className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<input
									type="text"
									placeholder="Nombre"
									className="bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
								/>
								<input
									type="email"
									placeholder="Email"
									className="bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
								/>
							</div>
							<input
								type="text"
								placeholder="Asunto"
								className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
							/>
							<textarea
								rows={4}
								placeholder="Mensaje"
								className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors"
							></textarea>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-neon-purple to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] active:scale-95"
							>
								Enviar Mensaje
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

export default Contact;