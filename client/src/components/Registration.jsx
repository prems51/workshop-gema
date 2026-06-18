import React, { useState } from 'react';
import axios from "axios";

const Registration = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errors.phone = "Please enter a valid phone number (10+ digits)";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        // const SERVER_URI = "http://localhost:3000";
        const SERVER_URI = "https://workshop-gema.onrender.com";
        const res = await axios.post(`${SERVER_URI}/api/enquiry`, { name: formData.fullName, email: formData.email, phone: formData.phone });
        console.log(res.data.message);
        setIsSubmitted(true);
        setFormErrors({});
      } catch (err) {
        alert("Enquiry failed, please try again later")
        console.log(err);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleResetForm = () => {
    setFormData({ fullName: '', email: '', phone: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="register" className="py-20 bg-white border-t border-slate-100 scroll-mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-tr from-blue-900 via-indigo-900 to-purple-900 rounded-4xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-white">

          {/* Background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-60"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Form Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500 text-white shadow-md">
                🎟 Limited Seats Left
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                Secure Your Child's Spot Today
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Provide your details to register. Our admissions coordinator will reach out to you within 24 hours to confirm your payment receipt and onboard your student.
              </p>

              {/* Trust Badges */}
              <div className="space-y-4 pt-4 border-t border-indigo-800">
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="text-emerald-400 font-bold text-lg">✓</span>
                  <span className="text-sm font-semibold">100% Secure Online Payment</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="text-emerald-400 font-bold text-lg">✓</span>
                  <span className="text-sm font-semibold">Live Online Instruction & Projects</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="text-emerald-400 font-bold text-lg">✓</span>
                  <span className="text-sm font-semibold">Certificate of Completion Included</span>
                </div>
              </div>
            </div>

            {/* Form Input Right */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl border border-slate-100/10">

                {isSubmitted ? (
                  <div className="text-center py-10 px-4 space-y-6 animate-float-fast">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Spot Reserved!</h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                        Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. We've sent a confirmation invoice instructions to <span className="font-bold text-slate-900">{formData.email}</span>.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl text-xs text-slate-500 border border-slate-100 text-left space-y-2">
                      <p><strong>Next Steps:</strong></p>
                      <ol className="list-decimal pl-4 space-y-1">
                        <li>Check your spam folder if you do not receive our email within 5 minutes.</li>
                        <li>Our advisor will ring you on <strong>{formData.phone}</strong> today.</li>
                      </ol>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline focus:outline-none"
                    >
                      Register another child
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-slate-950 font-display">Registrant Registration</h3>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your Child's Full Name"
                        className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${formErrors.fullName ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-indigo-500'}`}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-500 font-semibold">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="parent@example.com"
                        className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-indigo-500'}`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 font-semibold">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-indigo-500'}`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-500 font-semibold">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                      >
                        Reserve My Spot
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-500">
                      By signing up, you agree to receive class onboarding WhatsApp alerts.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
