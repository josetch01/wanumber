import React from 'react';

const TermsPage = ({ onNavigate }) => {
    return (
        <>
        {/* Contenido principal */}
        <div className="container mx-auto max-w-4xl px-4 py-8 lg:py-12">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-10">
            {/* Encabezado */}
            <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Términos del Servicio
                </h1>
                <p className="text-sm text-gray-500">Última actualización: 12/10/2025</p>
            </div>

            {/* Contenido */}
            <div className="prose prose-sm lg:prose-base max-w-none text-gray-700">
                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    1. ACEPTACIÓN DE LOS TÉRMINOS
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    Al acceder, utilizar o adquirir servicios en esta plataforma ("Servicio"), usted ("Usuario", "Cliente" o "usted")
                    reconoce que ha leído, comprendido y acepta estar sujeto a estos Términos del Servicio ("Términos"). 
                    Si no está de acuerdo con estos Términos, tiene prohibido utilizar el Servicio.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    2. DESCRIPCIÓN DEL SERVICIO
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    El Servicio ofrece acceso temporal a números de teléfono y servicios relacionados de telecomunicaciones. 
                    El Servicio se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    3. OBLIGACIONES DEL USUARIO Y CONDUCTAS PROHIBIDAS
                </h2>
                <p className="text-sm lg:text-base leading-relaxed mb-4">
                    Usted se compromete a utilizar el Servicio únicamente para fines legales y de conformidad con las leyes y 
                    regulaciones aplicables. Está estrictamente prohibido:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm lg:text-base ml-4">
                    <li>Utilizar los servicios con fines fraudulentos, ilegales o maliciosos</li>
                    <li>Violar cualquier ley federal, estatal, local o internacional</li>
                    <li>Realizar acoso, spam o comunicaciones no deseadas</li>
                    <li>Intentar eludir medidas de seguridad o acceder a áreas no autorizadas</li>
                    <li>Realizar actividades que puedan dañar a terceros o violar sus derechos</li>
                </ul>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    4. LIMITACIÓN DE RESPONSABILIDAD E INDEMNIZACIÓN
                </h2>

                {/* AVISO LEGAL CRÍTICO */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-2 mb-4 rounded-sm">
                    <p className="text-sm lg:text-base font-semibold text-yellow-800">
                    AVISO LEGAL IMPORTANTE:
                    </p>
                </div>

                <div className="mb-6">
                    <p className="text-sm lg:text-base leading-relaxed mb-3">
                    <span className="font-semibold text-gray-900">RENUNCIA COMPLETA DE RESPONSABILIDAD:</span> 
                    La Empresa rechaza expresamente toda responsabilidad por cualquier uso, mal uso, abuso o consecuencias 
                    derivadas de la utilización de los números telefónicos o servicios proporcionados. Al proceder con el pago 
                    y uso del servicio, usted acepta incondicionalmente la responsabilidad legal total por todas las consecuencias, 
                    incluyendo, entre otras:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm lg:text-base ml-4">
                    <li>Cualquier investigación, procedimiento o acción legal</li>
                    <li>Violaciones o sanciones por incumplimiento normativo</li>
                    <li>Responsabilidad civil o penal derivada del uso del servicio</li>
                    <li>Daños a terceros o a entidades comerciales</li>
                    <li>Violaciones de privacidad o brechas de protección de datos</li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm lg:text-base leading-relaxed mb-3">
                    <span className="font-semibold text-gray-900">INDEMNIZACIÓN:</span> 
                    Usted acepta indemnizar, defender y mantener indemne a la Empresa, sus directivos, empleados, agentes 
                    y afiliados frente a cualquier reclamo, daño, pérdida, costo o gasto (incluidos los honorarios razonables 
                    de abogados) que surjan o estén relacionados con:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm lg:text-base ml-4">
                    <li>Su uso o mal uso del Servicio</li>
                    <li>Su violación de estos Términos o de las leyes aplicables</li>
                    <li>Cualquier reclamo de terceros derivado de sus acciones</li>
                    <li>Cualquier incumplimiento de declaraciones o garantías establecidas en este documento</li>
                    </ul>
                </div>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    5. POLÍTICA DE PAGO Y REEMBOLSO
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    El pago por los servicios constituye la aceptación de estos Términos y el reconocimiento de las cláusulas 
                    de exención de responsabilidad contenidas en el presente documento. Todas las ventas son finales. 
                    No se realizarán reembolsos bajo ninguna circunstancia.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    6. DISPONIBILIDAD Y MODIFICACIONES DEL SERVICIO
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    La Empresa se reserva el derecho de modificar, suspender o descontinuar el Servicio en cualquier momento 
                    y sin previo aviso. No garantizamos la disponibilidad, confiabilidad o funcionalidad continua del Servicio.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    7. PROPIEDAD INTELECTUAL
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    Todo el contenido, características y funcionalidades del Servicio son propiedad de la Empresa y están 
                    protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    8. PRIVACIDAD Y MANEJO DE DATOS
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    Su privacidad y el manejo de sus datos están regidos por nuestra Política de Privacidad, la cual se incorpora 
                    por referencia a estos Términos.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    9. LEY APLICABLE Y RESOLUCIÓN DE DISPUTAS
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    Estos Términos se regirán e interpretarán de acuerdo con la legislación aplicable. 
                    Cualquier disputa será resuelta mediante arbitraje vinculante.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    10. DIVISIBILIDAD Y ACUERDO COMPLETO
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes 
                    permanecerán en pleno vigor. Estos Términos constituyen el acuerdo completo entre usted y la Empresa.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    11. MODIFICACIONES DE LOS TÉRMINOS
                </h2>
                <p className="text-sm lg:text-base leading-relaxed">
                    La Empresa se reserva el derecho de modificar estos Términos en cualquier momento. 
                    El uso continuado del Servicio constituye la aceptación de los Términos modificados.
                </p>
                </section>

                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <p className="text-sm lg:text-base font-semibold text-gray-900">
                    Al utilizar este Servicio, usted reconoce que ha leído, comprendido y acepta estar sujeto a estos 
                    Términos del Servicio.
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* PIE DE PÁGINA */}
        <div className="bg-white w-full border-t border-gray-200 mt-1">
            <div className="container mx-auto max-w-4xl px-6 py-6">
            <footer className="text-center text-xs text-gray-500">
                <p className="space-x-4">
                <button 
                    onClick={() => onNavigate('terms')}
                    className="hover:text-gray-600 transition-colors font-semibold">
                    T&C
                </button>
                {/* 
                <span>•</span>
                <a href="#" className="hover:text-gray-600">Legal</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-600">Servicios</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-600">Pedidos en lote</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-600">API BETA</a>
                */}
                </p>
            </footer>
            </div>
        </div>
        </>
    );
};

export default TermsPage;
