import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';

export default function SobrePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Sobre' }
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre o Portal</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O Portal foi criado com o objetivo de oferecer uma experiência completa e integrada,
                combinando um catálogo de produtos de qualidade com conteúdo informativo e relevante
                através do nosso blog.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acreditamos que informação e produtos andam juntos, e por isso desenvolvemos uma
                plataforma que permite aos usuários descobrir produtos incríveis enquanto aprendem
                sobre os mais diversos assuntos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que Oferecemos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Catálogo de Produtos</h3>
                  <p className="text-gray-700">
                    Explore nossa seleção cuidadosa de produtos em diversas categorias,
                    incluindo eletrônicos, roupas, itens para casa e livros.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog de Artigos</h3>
                  <p className="text-gray-700">
                    Leia artigos informativos sobre tecnologia, moda, decoração e muito mais,
                    escritos por especialistas em cada área.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Qualidade em todos os produtos e conteúdos oferecidos</li>
                <li>Transparência e honestidade em todas as interações</li>
                <li>Inovação constante para melhorar a experiência do usuário</li>
                <li>Compromisso com a satisfação e o bem-estar dos nossos usuários</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Tem alguma dúvida, sugestão ou feedback? Estamos sempre abertos a ouvir você.
                Entre em contato conosco através dos canais disponíveis e teremos prazer em ajudar.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

