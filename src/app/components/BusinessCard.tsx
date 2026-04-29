import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import logoBlack from "figma:asset/63d061f1cad2a59beb4d95f077ccf25a1af6decb.png";

export function BusinessCard() {
  const [showBack, setShowBack] = useState(false);

  // Contact information
  const contactInfo = {
    name: 'Mike Lee',
    title: 'Founder & Chairman',
    organization: 'Global Student Startup Foundation',
    email: 'mikelee@usc.edu',
    phone: '+1-562-822-7858',
    social: '@uscprofessor',
    linkedin: 'https://linkedin.com/in/uscprofessor',
    website: 'https://foundation.globalstudentstartup.org',
    gsscWebsite: 'https://globalstudentstartup.org'
  };

  // vCard format for contact QR code
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Mike Lee
TITLE:Founder & Chairman
ORG:Global Student Startup Foundation
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
URL:${contactInfo.website}
END:VCARD`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h1 className="text-gray-800 text-3xl font-bold mb-3">GSSF Business Card</h1>
          <p className="text-gray-600 text-sm mb-6">Mike Lee - Founder & Chairman</p>
          <button
            onClick={() => setShowBack(!showBack)}
            className="px-8 py-3 bg-[#242EC0] text-white rounded-lg hover:bg-[#1a22a0] transition-all shadow-lg text-sm font-semibold tracking-wide"
          >
            {showBack ? '← Show Front' : 'Show Back →'}
          </button>
        </div>

        <div className="perspective-1000">
          <div
            className={`relative transition-transform duration-700 transform-style-3d ${
              showBack ? 'rotate-y-180' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: showBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* FRONT SIDE */}
            <div
              className="backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              <div
                className="bg-white shadow-2xl overflow-hidden border border-gray-200"
                style={{
                  aspectRatio: '3.5 / 2',
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                <div className="h-full relative">
                  <div className="h-full px-10 py-10 flex items-center gap-8">
                    {/* Logo and tagline section */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <img 
                        src={logoBlack} 
                        alt="GSSF" 
                        className="h-48 w-auto mb-2"
                      />
                      <p className="text-gray-500 text-sm italic text-center max-w-xs">
                        Talent is global. Opportunity is not.
                      </p>
                    </div>

                    {/* Contact information on the right */}
                    <div className="flex-1 flex flex-col justify-center h-full ml-4">
                      <div className="space-y-3">
                        <div className="border-t border-gray-200 pt-4">
                          <h2 className="text-gray-900 text-3xl font-bold mb-0.5">
                            {contactInfo.name}
                          </h2>
                          <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">
                            {contactInfo.title}
                          </p>
                          <p className="text-[#242EC0] text-base font-semibold mt-2">
                            {contactInfo.organization}
                          </p>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-1 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span className="font-medium">Email:</span>
                            <span>{contactInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span className="font-medium">Phone:</span>
                            <span>{contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            <div className="flex items-center">
                              <Linkedin className="w-4 h-4" />
                              <span>:</span>
                            </div>
                            <span>{contactInfo.social}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div
                className="bg-[#08044C] shadow-2xl overflow-hidden"
                style={{
                  aspectRatio: '3.5 / 2',
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                <div className="h-full p-10 flex flex-col justify-center">
                  {/* QR Codes */}
                  <div className="grid grid-cols-3 gap-8">
                    {/* Contact vCard QR Code */}
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-3 inline-block">
                        <QRCodeSVG
                          value={vCardData}
                          size={140}
                          level="H"
                          includeMargin={false}
                        />
                      </div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider">
                        Contact
                      </p>
                    </div>

                    {/* LinkedIn QR Code */}
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-3 inline-block">
                        <QRCodeSVG
                          value={contactInfo.linkedin}
                          size={140}
                          level="H"
                          includeMargin={false}
                        />
                      </div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider">
                        LinkedIn
                      </p>
                    </div>

                    {/* Foundation Website QR Code */}
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-lg mb-3 inline-block">
                        <QRCodeSVG
                          value={contactInfo.website}
                          size={140}
                          level="H"
                          includeMargin={false}
                        />
                      </div>
                      <p className="text-white text-xs font-semibold uppercase tracking-wider">
                        Foundation
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-4 border-t border-white/20 text-center">
                    <p className="text-white/70 text-xs">
                      foundation.globalstudentstartup.org
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Instructions */}
        <div className="mt-12 text-center text-gray-600 text-sm max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-2">
            <strong className="text-gray-800">Print Specifications:</strong> Standard business card size 3.5" × 2" (89mm × 51mm)
          </p>
          <p className="text-xs text-gray-500">
            Recommended: 300 DPI, CMYK color mode, 350gsm cardstock with matte or silk finish
          </p>
        </div>
      </div>
    </div>
  );
}