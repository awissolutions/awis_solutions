'use client'
import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors extends FormData {}

interface FormTouched {
  [key: string]: boolean;
}

interface ApiResponse {
  success: boolean;
  message?: string;
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [touched, setTouched] = useState<FormTouched>({
    fullName: false,
    email: false,
    phone: false,
    message: false
  });

  const validateField = (name: keyof FormData, value: string): string => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters long';
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^[+]?[\d\s-]{10,}$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters long';
        }
        break;
    }
    return error;
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to typed object
    const formValues: FormData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string
    };

    // Touch all fields to show errors
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      message: true
    });

    if (!validateForm(formValues)) {
      return;
    }

    setLoading(true);
    setResponseMessage('');

    // Add access key to form data
    formData.append("access_key", "9cebf8d5-5e4d-4849-b947-6ebf416f80b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json() as ApiResponse;

      if (result.success) {
        setResponseMessage('Your message was sent successfully!');
        // Reset form
        form.reset();
        setErrors({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTouched({
          fullName: false,
          email: false,
          phone: false,
          message: false
        });
      } else {
        setResponseMessage('Something went wrong, please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let's talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg width="34" height="25" viewBox="0 0 34 25" className="fill-current">
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h3>
                    <p className="mt-1 text-base text-body-color dark:text-dark-6">
                      contact@awissolutions.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                  <label htmlFor="fullName" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Adam Gelius"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="email" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="phone" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div className="mb-[30px]">
                  <label htmlFor="message" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={1}
                    placeholder="type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
              {responseMessage && (
                <p className={`mt-4 text-center text-base ${
                  responseMessage.includes('success') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {responseMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;