import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Building, MapPin, Briefcase, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from "@/components/Footer";
import JoinOurTeam from "@/components/JoinOurTeam";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Business Development Manager",
      location: "Gurgaon",
      experience: "2–5 Years",
      jobType: "Full-time",
      salary: "Fixed Salary + Incentives",
      fullDetails: {
        jobTitle: "Business Development Manager",
        company: "Group Dealz",
        location: "Gurgaon",
        experience: "2–5 Years",
        jobType: "Fixed Salary + Incentives",
        workType: "Full-time",
        responsibilities: [
          "Identify, contact, and meet brokers, distributors, and potential clients to promote Company' products and services.",
          "Conduct regular client visits and build strong business relationships in both B2B and B2C segments.",
          "Handle the complete end-to-end sales process.",
          "Explain product features, benefits, and pricing to clients effectively.",
          "Achieve monthly sales targets through active field sales and networking.",
          "Provide feedback and market insights to the management team for business improvement."
        ],
        requirements: [
          "Experience: 2 to 5 years in Sales (B2B/B2C or Field Sales preferred).",
          "Own Vehicle: Mandatory (Field sales role).",
          "Excellent communication and negotiation skills.",
          "Strong interpersonal and client relationship management abilities.",
          "Self-motivated, goal-oriented, and target-driven."
        ],
        compensation: "Incentives and rewards for high achievers."
      }
    },
    {
      id: 2,
      title: "Telecaller",
      location: "Gurgaon, Sector 67",
      experience: "2 to 5 Years",
      jobType: "Full-time",
      salary: "As per company standards",
      fullDetails: {
        jobTitle: "Telecaller",
        company: "Group Dealz",
        experience: "2 to 5 Years",
        qualification: "Graduate (Any Stream)",
        location: "Gurgaon, Sector 67",
        workingDays: "Monday to Saturday",
        workingHours: "10:00 AM to 6:30 PM",
        jobSummary: "We are looking for a motivated and detail-oriented Telecaller to join our team at Group Dealz. The role involves handling outbound and inbound calls, maintaining client records, and updating Excel sheets accurately. The ideal candidate should have excellent communication skills, a positive attitude, and proficiency in MS Excel.",
        responsibilities: [
          "Make outbound calls to existing and potential clients to promote company deals and offers.",
          "Handle inbound queries and provide information about products and services.",
          "Maintain and update customer and lead data in Excel sheets on a daily basis.",
          "Follow up with clients for feedback, inquiries, or pending requirements.",
          "Coordinate with internal teams to ensure smooth operations.",
          "Prepare daily and weekly call reports.",
          "Meet calling and conversion targets as assigned by the management."
        ],
        requirements: [
          "Graduate in any discipline.",
          "2–5 years of experience as a Telecaller, Customer Care Executive, or similar role.",
          "Strong verbal communication and interpersonal skills.",
          "Proficiency in MS Excel and data maintenance.",
          "Good time management and attention to detail.",
          "Ability to work independently and as part of a team."
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Careers at GroupDealz - Join Our Team</title>
        <meta name="title" content="Careers at GroupDealz - Join Our Team" />
        <meta
          name="description"
          content="Join GroupDealz and be part of the real estate revolution. Explore exciting career opportunities in Gurgaon."
        />
        <meta name="keywords" content="GroupDealz careers, real estate jobs, hiring, Gurgaon jobs" />
        <link rel="canonical" href="https://www.groupdealz.in/careers" />
        <meta property="og:title" content="Careers at GroupDealz - Join Our Team" />
        <meta
          property="og:description"
          content="Join GroupDealz and be part of the real estate revolution. Explore exciting career opportunities."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Join Our
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Growing Team
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
              Be part of the real estate revolution. We're looking for talented individuals who are passionate about innovation, transparency, and making real estate accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Why Work With Us?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                GroupDealz is on a mission to democratize real estate investment. Join a team of innovators, professionals, and dreamers who are reshaping the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                { icon: Building, title: "Innovative Culture", desc: "Work on cutting-edge solutions in fintech and real estate" },
                { icon: Briefcase, title: "Growth Opportunities", desc: "Continuous learning and career advancement" },
                { icon: MapPin, title: "Prime Location", desc: "Based in Gurgaon with modern workspace" },
                { icon: Clock, title: "Work-Life Balance", desc: "Flexible working hours and remote options" }
              ].map((item, index) => (
                <Card key={index} className="border-2 border-blue-100 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Open Positions
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We have exciting opportunities available. Click on any position to learn more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer" onClick={() => setSelectedJob(job)}>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm sm:text-base">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.jobType}
                      </div>
                      <Button className="w-full mt-4 text-black hover:opacity-90" style={{ backgroundColor: '#eebd2b' }}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold">{selectedJob.fullDetails.jobTitle}</h2>
              <button onClick={() => setSelectedJob(null)} className="text-white hover:bg-white/20 p-2 rounded-full">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Info */}
              <div className="grid sm:grid-cols-2 gap-4 pb-6 border-b">
                <div>
                  <p className="text-sm text-muted-foreground">Company</p>
                  <p className="font-semibold">{selectedJob.fullDetails.company}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">{selectedJob.fullDetails.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-semibold">{selectedJob.fullDetails.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Job Type</p>
                  <p className="font-semibold">{selectedJob.fullDetails.workType || selectedJob.fullDetails.workingDays}</p>
                </div>
                {selectedJob.fullDetails.qualification && (
                  <div>
                    <p className="text-sm text-muted-foreground">Qualification</p>
                    <p className="font-semibold">{selectedJob.fullDetails.qualification}</p>
                  </div>
                )}
                {selectedJob.fullDetails.workingHours && (
                  <div>
                    <p className="text-sm text-muted-foreground">Working Hours</p>
                    <p className="font-semibold">{selectedJob.fullDetails.workingHours}</p>
                  </div>
                )}
              </div>

              {/* Job Summary */}
              {selectedJob.fullDetails.jobSummary && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Job Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedJob.fullDetails.jobSummary}</p>
                </div>
              )}

              {/* Key Responsibilities */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.fullDetails.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.fullDetails.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compensation */}
              {selectedJob.fullDetails.compensation && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Compensation</h3>
                  <p className="text-blue-800">{selectedJob.fullDetails.compensation}</p>
                </div>
              )}

              {/* Apply Button */}
              <div className="flex gap-4 pt-6 border-t">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                  onClick={() => {
                    const subject = `Application for ${selectedJob.fullDetails.jobTitle}`;
                    const body = `Hello GroupDealz Team,

I would like to apply for the position of ${selectedJob.fullDetails.jobTitle}${selectedJob.fullDetails.location ? ` (${selectedJob.fullDetails.location})` : ''}.

Name:
Email:
Phone:
Experience:

Please find my resume attached.

Regards,`;

                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      "info@groupdealz.com"
                    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                    const opened = window.open(gmailUrl, "_blank");
                    if (!opened) {
                      // Fallback to default mail client if popup blocked
                      window.location.href = `mailto:info@groupdealz.com?subject=${encodeURIComponent(
                        subject
                      )}&body=${encodeURIComponent(body)}`;
                    }
                  }}
                >
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 🔥 JOIN OUR TEAM IMAGE SECTION */}
      <JoinOurTeam />

    
      <Footer />
    </div>
  );
};

export default Careers;