import {
  Award,
  BookOpen,
  Check,
  Clock,
  Facebook,
  HandHeart,
  Instagram,
  LogIn,
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
import { ROUTES } from 'lib/constants'

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 w-full flex justify-between items-center border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" to={ROUTES.HOME}>
          <div className="bg-violet-600 text-white p-2 rounded-lg mr-2">
            <HandHeart className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-white">SignPE</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#features"
          >
            Características
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#testimonials"
          >
            Testimonios
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#pricing"
          >
            Planes
          </a>
          <a
            className="font-semibold text-gray-300 hover:text-violet-400 transition-colors"
            href="#contact"
          >
            Contacto
          </a>
        </nav>
        <Link to={ROUTES.LOGIN} className="ml-4">
          <Button type="button" size="sm" className="bg-violet-600 hover:bg-violet-700">
            Inicia Sesión <LogIn />
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
                    Domina el lenguaje de señas con <span className="text-violet-400">SignPE</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Aprende Lenguaje de Señas Peruano (LSP) a través de lecciones interactivas,
                    tutoriales en video y sesiones de práctica. Conéctate con la comunidad sorda y
                    amplía tus habilidades de comunicación.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to={ROUTES.SIGN_UP}>
                    <Button type="button" size="lg" className="bg-violet-600 hover:bg-violet-700">
                      ¡Empieza ahora!
                    </Button>
                  </Link>
                  <Link to={ROUTES.LOGIN}>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-violet-400 border-violet-400 hover:bg-violet-900/10  hover:text-violet-500 hover:border-violet-500"
                    >
                      Ya tengo cuenta
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>50,000+ estudiantes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>Valoración de 4.9/5</span>
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
                  ¿Por qué elegir SignPE?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con nuestra plataforma, aprender lengua de señas es fácil, dinámico y accesible
                  para todos.
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
                      <h3 className="text-xl font-bold text-white">Lecciones Interactivas</h3>
                      <p className="text-gray-300">
                        Lecciones en video con retroalimentación en tiempo real.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-900/30">
                      <Users className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Forma Parte de la Comunidad</h3>
                      <p className="text-gray-300">
                        Conectate con las personas que comparten tu interés en LSP.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-900/30">
                      <Award className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Sigue Tu Progreso</h3>
                      <p className="text-gray-300">
                        Visualiza tu progreso en cada seña con un seguimiento visual e interactivo.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-900/30">
                      <Clock className="h-6 w-6 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Aprende a tu Ritmo</h3>
                      <p className="text-gray-300">
                        Accede a todo el contenido desde tu computadora, sin horarios ni
                        restricciones.
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
                  Lo que Dicen Nuestros Estudiantes
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a miles de estudiantes que han transformado sus habilidades de comunicación
                  con SignPE.
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
                    "SignPE hizo que aprender LSP fuera más fácil de lo que esperaba. Las lecciones
                    interactivas me ayudaron muchísimo."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-violet-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-violet-400">SM</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Sarah Martinez</p>
                      <p className="text-xs text-gray-400">Profesora</p>
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
                    "Como padre de un niño sordo, SignPE ayudó a toda nuestra familia a comunicarse
                    mejor. Las lecciones están muy bien estructuradas."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-rose-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-rose-400">MJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Michael Johnson</p>
                      <p className="text-xs text-gray-400">Padre</p>
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
                    "La calidad de los videos es excelente. Me encanta poder recibir
                    retroalimentación personalizada en tiempo real."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-violet-900/50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-violet-400">EC</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Emily Chen</p>
                      <p className="text-xs text-gray-400">Estudiante</p>
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
                  Elige tu forma de aprender
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comienza con nuestro plan gratuito y mejora a medida que avanzas en tu aprendizaje
                  de la lengua de señas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-8">
              {/* Free Plan */}
              <Card className="relative bg-gray-800 border-violet-700">
                <CardHeader>
                  <CardTitle className="text-white">Básico</CardTitle>
                  <CardDescription className="text-gray-400">Perfecto para iniciar</CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $0<span className="text-sm font-normal text-gray-400">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">5 lecciones básicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Curso básico del alfabeto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Seguimiento del progreso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Disponibilidad 24/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button type="button" className="w-full bg-violet-600 hover:bg-violet-700">
                    Get Started Free
                  </Button>
                </CardFooter>
              </Card>

              {/* Basic Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Intermedio</CardTitle>
                  <CardDescription className="text-gray-400">
                    Para estudiantes dedicados
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $9<span className="text-sm font-normal text-gray-400">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">50+ lecciones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Señas compuestas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Descargas sin conexión</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Soporte de correo electrónico</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button type="button" disabled className="w-full">
                    Próximamente
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Avanzado</CardTitle>
                  <CardDescription className="text-gray-400">
                    Para estudiantes comprometidos
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $19<span className="text-sm font-normal text-gray-400">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">200+ lecciones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Historial de lecciones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Señas intermedias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button type="button" disabled className="w-full">
                    Próximamente
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative opacity-60 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Experto</CardTitle>
                  <CardDescription className="text-gray-400">
                    Para profesionales del lenguaje de señas
                  </CardDescription>
                  <div className="text-3xl font-bold text-white">
                    $49<span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Acceso ilimitado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Manejo de equipo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Contenido personalizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Soporte dedicado</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button type="button" disabled className="w-full">
                    Próximamente
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
                  ¿Listo Para Comenzar Tu Camino en el Lenguaje de Señas Peruano?
                </h2>
                <p className="max-w-[600px] text-violet-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a miles de personas que ya se comunican con confianza. Crea tu cuenta
                  gratuita hoy mismo.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link to={ROUTES.SIGN_UP}>
                  <Button
                    type="button"
                    size="lg"
                    className="bg-violet-100/10 text-violet-200 border border-violet-200 hover:bg-violet-200/15 hover:text-violet-300 hover:border-violet-300"
                  >
                    ¡Empieza ahora!
                  </Button>
                </Link>
                <Link to={ROUTES.LOGIN}>
                  <Button
                    type="button"
                    size="lg"
                    className="bg-violet-100/10 text-violet-200 border border-violet-200 hover:bg-violet-200/15 hover:text-violet-300 hover:border-violet-300"
                  >
                    Ya tengo cuenta
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-violet-100">
                Sin tarjeta de crédito • Cancela cuando quieras • Garantía de reembolso por 30 días
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
                  <HandHeart className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl text-white">SignPE</span>
              </div>
              <p className="text-sm text-gray-400">
                Hacemos que el lenguaje de señas sea accesible para todos a través de tecnología
                educativa innovadora e inteligencia artificial.
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
              <h4 className="font-semibold text-white">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Características
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Planes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Soporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Contáctanos
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-violet-400">
                    Estado del Servicio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4" id="contact">
              <h4 className="font-semibold text-white">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hello@signpe.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+51 912 345 678</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Lima, Perú</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} SignPE. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Politica de Privacidad
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Terminos de Servicio
              </Link>
              <Link to="#" className="text-xs text-gray-400 hover:text-violet-400">
                Politica de Cookies
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
