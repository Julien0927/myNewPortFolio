import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        success: null,
        message: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Remplacez ces valeurs par vos propres IDs EmailJS
            const serviceId = 'service_hc88dgg';
            const templateId = 'template_82v9di7';
            const publicKey = '32-kQ5a1M3AuRclVh';
            
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            );
            
            console.log('Email envoyé avec succès:', result.text);
            
            setSubmitStatus({
                success: true,
                message: "Votre message a été envoyé avec succès!"
            });
            
            // Réinitialiser le formulaire
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
          console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus({
                success: false,
                message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
    <Layout 
        title="Contact" 
        description=
        "Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais."
    >
        <div className="container mx-auto pxc-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                    <div>
                        <h2 className="text-3xl text-bold text-start font-bold" style={{fontFamily: 'Montserrat'}}>Informations de contact</h2>
{/*                         <p className="text-xl text-justify mt-2" style={{fontFamily: 'Poppins'}}>Vous pouvez me contacter via ce formulaire ou par email pour toute proposition ou collaboration. Je m'engage à vous répondre rapidement !</p>
 */}                      <Link to="mailto:borderdevop@gmail.com">
                            <div className="flex justify-start gap-5 mt-5 ">
                                <img className="size-8 mt-3 " src="/icones/mail.svg" alt="mail contact" />
                                <div className="flex flex-col justify-start">
                                  <h3 className="text-xl text-start font-bold" style={{fontFamily: 'Poppins'}}>Email</h3>
                                  <p className="text-xl" style={{fontFamily: 'Poppins'}}>borderdevop@gmail.com</p>
                                </div>
                            </div>
                          </Link>
                          <div className="flex items-start mt-5">
                            <Phone className="h-8 w-8 text-primary dark:text-custom-quinary mr-4 mt-1" />
                            <div className="text-start">
                            <h3 className="text-xl font-bold">Téléphone</h3>
                            <p className="text-gray-600 dark:text-gray-300">Sur demande</p>
                            </div>
                          </div>

                          <div className="flex items-start mt-5">
                            <MapPin className="h-8 w-8 text-primary dark:text-custom-quinary mr-4 mt-1" />
                            <div className="text-start">
                            <h3 className="text-xl font-bold">Localisation</h3>
                            <p className="text-gray-600 dark:text-gray-300">France</p>
                            </div>
                         </div>

                          <div className="bg-secondary rounded-xl p-6 text-center mt-5">
                            <h3 className="text-lg font-semibold mb-3 text-black">
                            Disponible pour de nouvelles opportunités
                            </h3>
                            <p className="mb-0 text-gray-700 dark:text-gray-200">
                            Je suis actuellement à l'écoute de projets freelance et d'opportunités professionnelles.
                            </p>
                        </div>
                    </div>
                    
                    {/* Formulaire de contact */}
                    <div className="lg:ms-3">
                        {submitStatus.success === true ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                <p>{submitStatus.message}</p>
                            </div>
                        ) : submitStatus.success === false ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                <p>{submitStatus.message}</p>
                            </div>
                        ) : null}
                        
                        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
                            <label className="fieldset-legend">Nom</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input w-full border border-gray-300 rounded p-2" 
                                placeholder="Votre nom" 
                                required
                            />
                            
                            <label className="fieldset-legend">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input w-full border border-gray-300 rounded p-2" 
                                placeholder="Votre @email" 
                                required
                            />
                            
                            <label className="fieldset-legend">Message</label>
                            <textarea 
                                rows={8} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea w-full border border-gray-300 rounded p-2" 
                                placeholder="Votre message" 
                                required
                            />
                            
                            <Button 
                                type="submit" 
                                className="btn mt-2" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
}