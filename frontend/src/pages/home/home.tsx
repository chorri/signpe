import {
  Award,
  BookOpen,
  Check,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
  Twitter,
  Users,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components'

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 w-full flex justify-between items-center border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" to="/">
          <div className="bg-violet-600 text-white p-2 rounded-lg mr-2">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-white">SignPe</span>
        </Link>
        <nav className="md:flex gap-6">
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <Link to="/login" className="ml-4">
          <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
            Sign Up
          </Button>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-violet-900/20 to-rose-900/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Master Sign Language with <span className="text-violet-400">SignPe</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Learn American Sign Language (ASL) through interactive lessons, video tutorials,
                    and practice sessions. Connect with the deaf community and expand your
                    communication skills.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                    Start Learning Free
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-violet-400 border-violet-400 hover:bg-violet-900/10  hover:text-violet-500 hover:border-violet-500"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>50,000+ learners</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/landing-01.svg"
                  alt="Sign language learning illustration"
                  className="mx-auto max-w-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Why Choose SignPe?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform makes learning sign language engaging, effective, and
                  accessible for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-900/30">
                      <BookOpen className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Interactive Lessons</h3>
                      <p className="text-gray-300">
                        Step-by-step video lessons with real-time feedback and progress tracking.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-900/30">
                      <Users className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Community Practice</h3>
                      <p className="text-gray-300">
                        Connect with other learners and native signers for practice sessions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-900/30">
                      <Award className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Certified Courses</h3>
                      <p className="text-gray-300">
                        Earn certificates upon completion of structured learning paths.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-900/30">
                      <Clock className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Learn at Your Pace</h3>
                      <p className="text-gray-300">
                        Flexible scheduling with offline access to downloaded content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/landing-02.svg"
                  alt="Features illustration"
                  className="mx-auto max-w-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-800/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied learners who have transformed their communication
                  skills with SignPe.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    "SignPe made learning ASL so much easier than I expected. The interactive
                    lessons and community support helped me!"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-violet-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-violet-400">SM</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Sarah Martinez</p>
                      <p className="text-xs text-gray-400">Teacher</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    "As a parent of a deaf child, SignPe helped our whole family learn to
                    communicate better. The courses are well-structured and engaging."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-rose-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-rose-400">MJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Michael Johnson</p>
                      <p className="text-xs text-gray-400">Parent</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    "The video quality and instruction clarity are outstanding. I love how I can
                    practice with the community and get real feedback."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-violet-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-violet-400">EC</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Emily Chen</p>
                      <p className="text-xs text-gray-400">Student</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Choose Your Learning Path
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start with our free plan and upgrade as you progress in your sign language
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-8">
              {/* Free Plan */}
              <Card className="relative bg-gray-800 border-violet-700">
                <CardHeader>
                  <CardTitle className="text-white">Introductorio</CardTitle>
                  <CardDescription className="text-gray-400">
                    Perfect for getting started
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $0<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">5 basic lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Basic alphabet course</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Community access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Progress tracking</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    Get Started Free
                  </Button>
                </CardFooter>
              </Card>

              {/* Basic Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Básico</CardTitle>
                  <CardDescription className="text-gray-400">
                    For dedicated learners
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $9<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">50+ lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Conversation practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Offline downloads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Intermedio</CardTitle>
                  <CardDescription className="text-gray-400">For serious students</CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $19<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">200+ lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">1-on-1 practice sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Certificate courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Avanzado</CardTitle>
                  <CardDescription className="text-gray-400">For organizations</CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $49<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Unlimited access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Team management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Custom content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Dedicated support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-violet-900/40 to-rose-900/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center gap-4">
              <div className="flex flex-col items-center space-y-2 gap-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Start Your Sign Language Journey?
                </h2>
                <p className="max-w-[600px] text-violet-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of learners who are already communicating with confidence. Start
                  your free account today.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-violet-100/10 text-violet-200 border border-violet-200 hover:bg-violet-200/15 hover:text-violet-300 hover:border-violet-300"
                >
                  Start Learning Free
                </Button>
                <Button
                  size="lg"
                  className="bg-violet-100/10 text-violet-200 border border-violet-200 hover:bg-violet-200/15 hover:text-violet-300 hover:border-violet-300"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-violet-100">
                No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-16 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-violet-600 text-white p-2 rounded-lg mr-2">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl text-white">SignPe</span>
              </div>
              <p className="text-sm text-gray-400">
                Making sign language accessible to everyone through innovative e-learning
                technology.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4" id="contact">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hello@signpe.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} SignPe. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Terms of Service
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
