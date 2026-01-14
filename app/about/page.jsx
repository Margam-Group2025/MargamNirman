"use client";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  // const [teamMembers, setTeamMembers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTeamMembers = async () => {
  //     try {
  //       const { items } = await BaseCrudService.getAll("teammembers");
  //       setTeamMembers(items || []);
  //     } catch (error) {
  //       console.error("Error fetching team members:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTeamMembers();
  // }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver exceptional real estate, construction, and interior solutions that exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to excellence.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted and preferred partner for comprehensive construction and real estate services, setting industry standards for quality, innovation, and customer satisfaction.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Integrity, Excellence, Innovation, Customer Focus, and Sustainability guide every decision we make and every project we undertake.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              About Margam Nirman
            </h1>
            <p className="text-xl text-secondary max-w-4xl mx-auto">
              Building trust, quality, and innovation in every project since our inception
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-2xl mb-16"
          >
            <img
              src="https://static.wixstatic.com/media/a3674d_aaaad1ceb9384063b9f1c3a97c6ad783~mv2.png"
              alt="Margam Nirman overview"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-5xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              Margam Nirman is a leading real estate,
               construction, and interior services company dedicated to transforming visions 
               into reality. With years of experience and a commitment to excellence, we have established ourselves as a trusted partner for residential and commercial projects of all scales.
            </p>
            <p>
              Our comprehensive approach encompasses everything from real estate solutions and end-to-end construction services to innovative interior design and our specialized Bricknbar e-commerce platform for building materials. We pride ourselves on delivering projects that combine quality craftsmanship, timely execution,
               and innovative solutions tailored to each client's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12 grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 rounded-lg"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
     <section className="py-24 bg-white">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                Founded with a vision to revolutionize the construction and real estate industry, Margam Nirman has grown from a small team of passionate professionals to a comprehensive service provider trusted by hundreds of satisfied clients.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs. From residential homes to commercial complexes, from interior transformations to our pioneering Bricknbar e-commerce platform, we've consistently pushed boundaries to deliver excellence.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Today, we stand proud as a company that not only builds structures but also builds lasting relationships, trust, and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/a3674d_5511710bfd5944f19a500984ca949c7d~mv2.png?originWidth=640&originHeight=832"
                  alt="Margam Nirman journey and growth"
                  className="w-full h-full object-cover"
                  width={500} 
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      {/* <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-secondary">
              Professionals behind Margam Nirman
            </p>
          </motion.div>

          {loading ? (
            <p className="text-center">Loading team members...</p>
          ) : teamMembers.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-[350px] object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-yellow-600 mb-3">{member.role}</p>
                    {member.bio && (
                      <p className="text-secondary text-sm mb-4">
                        {member.bio}
                      </p>
                    )}
                    {member.linkedInProfile && (
                      <a
                        href={member.linkedInProfile}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600"
                      >
                        <Users size={16} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center">Team info coming soon.</p>
          )}
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
