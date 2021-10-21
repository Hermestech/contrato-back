module.exports =({ dsPersonaMoral,nombreRepresentanteLegal,nombreTrabajador, domicilioPersonaMoral, rfcPatron, registroPatronal, nacionalidadTrabajador, lugarNacimiento, fechaNacimiento, edad, sexoTrabajador, estadoCivilTrabajador, curpTrabajador, numeroSeguroSocial, domicilioTrabajador, puestoLaboral, salarioTrabajador, jornada, hrInicio, hrFinal, cantidadDias, ubicacionTrabajo }) => {
    const today = new Date();

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
       *{
           margin: 2%;
           padding: 0;
           font-family: 'Montserrat', sans-serif;
           font-size: small;
           text-align: justify;
       }
       html {
           zoom: 0.90;
       }
       .antecedentes h4{
           margin-left: 37%;
       }
       .clausulas h4 {

           margin-left: 40%;
       }
       li{
           margin-left:7%;
       }

       .footer{
           margin-top: 5%;
           margin-bottom: 10%;
       }
       .firmas{
           margin-left: 66%;
       }

       .table,td {
           border: 1px solid black;
       }
   </style>
   
</head>
<body>
    <header>
        <h4>CONTRATO INDIVIDUAL DE TRABAJO POR TIEMPO INDETERMINADO QUE CELEBRAN POR UNA PARTE ${dsPersonaMoral}, A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARÁ COMO "PATRÓN", REPRESENTADA EN ESTE ACTO POR ${nombreRepresentanteLegal}, Y POR OTRA PARTE ${nombreTrabajador},QUIEN CONCURRE POR SU PROPIO DERECHO Y A QUIEN, EN ADELANTE Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARÁ COMO "TRABAJADOR", QUIENES SE SUJETAN AL TENOR DE LAS SIGUIENTES DEFINICIONES, DECLARACIONES Y CLÁUSULAS:</h4>
    </header>
    <section class='definiciones'>
        <p><b>ÚNICO.-</b> Para los efectos del presente contrato, las partes acuerdan que los conceptos aquí establecidos tendrán el significado que se establece a continuación:</p>
        <ol type="I">
           <li><b>Creaciones Nuevas:</b>Cualquier invento, modelo de utilidad o diseño industrial, patentable o registrable en términos de la Ley Federal de Protección a la Propiedad Industrial.</li>

           <li><b>Elementos de Propiedad Intelectual:</b>Cualquiera de las <b>Creaciones Nuevas</b>o de las <b>Obras Protegidas</b>, tal y como se definen en el presente contrato.</li>

           <li><b>Información Confidencial:</b> Toda información relacionada con la <b>Sociedad</b>, a la cual el <b>Prestador</b> tenga acceso por virtud del presente contrato.</li>
           <li><b>Obras Protegidas: </b>Cualquier elemento de creación original, susceptible de ser divulgado o reproducido en cualquier forma o medio y que se encuentren protegidos en términos de la Ley Federal del Derecho de Autor, incluyendo, pero sin limitar, programas de cómputo, programas electrónicos con o sin elementos visuales o animados, compilación de bases de datos, obras de diseño gráfico, obras musicales o audiovisuales.</li>
           <li><b>SECRETOS INDUSTRIALES:</b><p>Toda información de aplicación industrial o comercial relacionada con el<b>PATRÓN,</b> su objeto social, modelo de negocios y actividad comercial, y que le signifique obtener o mantener una ventaja competitiva o económica frente a terceros en la realización de actividades económicas y respecto de la cual el <b>PATRÓN</b> haya adoptado los medios o sistemas suficientes para preservar su confidencialidad y el acceso restringido a la misma, en términos del Artículo 163 de la Ley Federal de Protección a la Propiedad Industrial, como pueden, ser de manera enunciativa, estrategias de negocios, planes de mercadotecnia, información relacionada con el desarrollo y lanzamiento al mercado de productos determinados, programas de cómputo, códigos fuente, códigos objeto, datos personales de socios o accionistas de cualquiera de las partes, conocimientos técnicos, experiencia, estándares, información de proveedores, métodos de pruebas, resultados de pruebas y experimentos, procesos de manufactura, así como procedimientos relacionados con la elaboración de productos tecnológicos, prototipos, modelos de proyectos, procedimientos de control de calidad, fórmula, diseños, embalaje, fotografías, dibujos, especificaciones, evaluaciones sobre riesgos, información de almacenamiento y estabilidad, programas de computadora, pronósticos comerciales, información de mercadotecnia, ventas y precios, muestras y cualquier otro material que lleve o incorpore información relacionada con las actividades de cada parte, secretos industriales, nuevos productos, nuevos proyectos o información sobre oportunidades de inversión, oportunidades de nuevos negocios y/o aliados estratégicos, así como información y listado de clientes o proveedores.</p></li>
    </section>
    <section class="declaraciones">
        <h4>DECLARACIONES</h4>
        <ol type="I">
            <li> <b>Declara el PATRÓN, a través de su representante:</b>
            <p>
                a)Que es una sociedad debidamente constituida de conformidad con las leyes vigentes en los Estados Unidos Mexicanos y que se encuentra legalmente inscrita en el registro público de su domicilio social;</p>
            <p>b)Que para efectos del presente contrato señala como domicilio el ubicado en ${domicilioPersonaMoral};</p> 
            <p>c)Que su Registro Federal de Contribuyentes es el número ${rfcPatron} y su registro patronal ante el Instituto Mexicano del Seguro Social es el número ${registroPatronal};</p>
            <p>d)Que conforme a su objeto social le está permitido celebrar el presente contrato y obligarse en los términos del mismo y;</p>
            <p>e)Que su representante cuenta con todas las facultades necesarias para obligarla en los términos del presente contrato, mismas que no le han sido revocadas, modificadas o limitadas en forma alguna con anterioridad a la celebración del presente contrato.</p>    
            </li>

            <li>
                <b>Declara el TRABAJADOR,por su propio Derecho:</b>
                <p>
                    a) Que su nombre completo es: ${nombreTrabajador}, de nacionalidad ${nacionalidadTrabajador}, originario de ${lugarNacimiento}, lugar donde nació el día ${fechaNacimiento}, con ${edad} años de edad, sexo ${sexoTrabajador}, estado civil ${estadoCivilTrabajador}, con Clave Única del Registro de Población número ${curpTrabajador} y registro ante el Instituto Mexicano del Seguro Social número ${numeroSeguroSocial}
                </p>
                <p>b)Que cuenta con las capacidades, aptitudes y facultades necesarias para desempeñar el trabajo y ocupar el puesto por el que será contratado en virtud del presente contrato, así como que cuenta con los permisos, licencias, cédulas o acreditaciones que lo acreditan como apto para desempeñar el trabajo que por virtud del presente contrato se obliga a realizar;</p>   
                <p>c)Que ha recibido del <b>PATRÓN,</b>  a su entera satisfacción, la capacitación necesaria para desempeñar los trabajos que por virtud de este contrato se obliga a realizar;</p> 
                <p>d) Que para efectos del presente contrato señala como domicilio el ubicado ${domicilioTrabajador} y;</p>
                <p> e) Que es su voluntad celebrar el presente contrato y obligarse en los términos señalados en el mismo.</p>    
            </li>
            <li><b>Declaran las PARTES, de manera conjunta:</b>
            <p>
                a)Que en el presente contrato no existe error, dolo, mala fe o cualquier otro vicio de la voluntad, así como que no existe lesión o situación alguna que pudiese afectar la validez del presente contrato;
            </p>
            <p>b) Que el objeto del presente contrato es lícito;</p>
            <p> c)Que se reconocen la personalidad con la que comparecen a la celebración de este contrato y;</p>
            <p> d) Que expresamente convienen en someterse a las obligaciones contenidas en las siguientes:</p>
               
            
            </li>
        </ol>

    </section>
    <section class="clasulas">
        <h4>CLÁUSULAS</h4>
     <ol type="1">
        <li><b>OBJETO.</b><p>El <b>TRABAJADOR</b>ocupará el puesto ${puestoLaboral},para lo cual se obliga a prestar al <b>PATRÓN,</b> de forma personal y subordinada, los servicios que se establecen describen en el Anexo A del presente contrato, cuyo contenido se tendrá aquí por reproducido como si a la letra se insertase, a cambio de un salario que será determinado de conformidad con lo establecido en la cláusula siguiente.
        El <b>TRABAJADOR</b> se obliga a realizar y prestar los servicios personales y subordinados descritos, de forma diligente, profesional y, siempre y en todo momento, bajo la dirección e instrucciones del <b>PATRÓN,</b> quien podrá en cualquier tiempo, alterar o modificar, los servicios que el<b>TRABAJADOR</b>  se ha obligado a prestar por virtud del presente contrato, siempre y cuando: i) así lo requieran las necesidades del <b>PATRÓN,</b> de conformidad, en todo momento, con  las normas de trabajo, la buena fe y la equidad y; ii) no se trate de modificaciones o alteraciones sustanciales a las obligaciones establecidas en el Anexo A.
        </p></li>

        <li><b>SALARIO.</b> <p>Como retribución por la prestación de los servicios, personales y subordinados, descritos en la cláusula que antecede, el <b>PATRÓN</b> pagará al <b>TRABAJADOR</b> un salario mensual equivalente a la cantidad de ${salarioTrabajador} <b>PESOS MONEDA NACIONA</b>L, mismo que le será pagado en los términos de la cláusula <b>TERCERA</b> del presente contrato.</p>
        <p>Las partes acuerdan que el salario a que se hace referencia en el párrafo que antecede ha sido determinado con base en la calidad y cantidad de trabajo que el <b>TRABAJADOR</b>deberá desempeñar en el puesto para el que ha sido contratado.
            Las partes acuerdan que el PATRÓN hará, por cuenta del <b>TRABAJADOR</b> todas las deducciones y retenciones legales que sean exigidas por la legislación aplicable y vigente en la República Mexicana, particularmente las que se refieren al impuesto sobre la renta, y aportaciones de seguridad social (IMSS, INFONAVIT y SAR). Así mismo el <b>PATRÓN</b> se obliga a efectuar las inscripciones, enteros y pagos correspondientes ante dichas instituciones, en los términos de las legislaciones respectivas, descontando las mismas del salario del <b>TRABAJADOR</b>, según la legislación aplicable, situación con la cual el <b>TRABAJADOR</b> expresa su entero consentimiento y aceptación.</p>
        </li>
        <li><b>FORMA Y TIEMPO EN LA QUE SE PAGARÁ EL SALARIO.</b>
        <p>El salario le será pagado directamente al <b>TRABAJADOR</b>, en dos exhibiciones los días <b>QUINCE y TREINTA</b> de cada mes o a más tardar el día hábil siguiente cuando no fuere posible realizar el pago en las fechas señaladas, por causas ajenas al <b>PATRÓN.</b> El <b>TRABAJADOR</b>, acepta que el pago de su salario se efectúe a través de los medios que señalen las partes con posterioridad a la celebración del presente contrato.</p>
        <p>Sin perjuicio de lo anterior, el <b>TRABAJADOR</b> acepta que, en caso de que por causas ajenas al <b>PATRÓN</b>, sea imposible realizarle el pago del salario por la vía acordada, su salario le será pagado en efectivo en el domicilio del <b>PATRÓN</b>a que se hace referencia en las declaraciones del presente contrato. </p>
        <p>El<b>TRABAJADOR</b>acepta y reconoce que, en aquellos casos en que esté imposibilitado para realizar personalmente el cobro de su salario, el pago se hará a la persona que el <b>TRABAJADOR</b>designe como apoderado mediante carta poder suscrita ante dos testigos, liberando al <b>PATRÓN</b> de cualquier responsabilidad relacionada con el pago de su salario.</p>
        </li>
        <li><b>JORNADA DE TRABAJO.-</b>
        <p>El <b>TRABAJADOR</b>laborará un total de ocho horas diarias, en JORNADA ${jornada}, desde las ${hrInicio} y hasta las ${hrFinal}, durante ${cantidadDias} días a la semana.</p>
        </li>
        <li><b>HORAS EXTRAS.-</b><p>El <b>TRABAJADOR</b> en ningún caso y por ningún motivo laborará horas extras, a menos que el PATRÓN, por circunstancias extraordinarias, se lo solicite por escrito debidamente firmado con firma autógrafa del supervisor directo del <b>TRABAJADOR</b> , en el que se señalen los motivos por los cuales solicita al <b>TRABAJADOR</b> que labore de forma extemporánea, así como las horas extraordinarias que laborará el <b>TRABAJADOR</b> y, los días y el salario que el <b>TRABAJADOR</b>  percibirá como retribución por las horas extras que labore. Dichas horas extras únicamente podrán prolongarse, hasta el tiempo máximo que marca la Ley Federal del Trabajo y serán retribuidas en los términos de dicha ley. </p>
        <p>Sin perjuicio de lo anterior, en los casos de siniestro o riesgo inminente en que peligre la vida del <b>TRABAJADOR</b>, de sus compañeros, o la existencia misma del <b>PATRÓN,</b>la jornada de trabajo podrá prolongarse por el tiempo estrictamente indispensable para evitar dichas incidencias, siniestros o riesgos. Si tal fuere el caso, las horas en que se prolongue la jornada de trabajo, de conformidad con lo dispuesto en este párrafo, se retribuirán con una cantidad igual a la que corresponda a cada una de las horas de la jornada regular, sin que sean consideradas como horas extras, en términos de los artículos 65 y 67 de la Ley Federal del Trabajo. 
        </p></li>
        <li>
            <b>LUGAR DE TRABAJO.-</b>
            <p>El <b>TRABAJADOR</b>, deberá prestar sus servicios principalmente en el local ubicado en ${ubicacionTrabajo}.Sin embargo, en caso de ser necesario el <b>PATRÓN</b>, podrá cambiar la ubicación de la prestación de los servicios, mediante una notificación o comunicado por cualquier medio efectivo de comunicación, incluidos los electrónicos.</p>
        </li>
        <li>
            <b>DURACIÓN DE LA RELACIÓN LABORAL.-</b>
            <p>Ambas partes acuerdan que el presente contrato se celebra por tiempo indeterminado.Sin perjuicio de lo anterior, en los casos de siniestro o riesgo inminente en que peligre la vida del <b>TRABAJADOR</b>, de sus compañeros, o la existencia misma del <b>PATRÓN</b>,, la jornada de trabajo podrá prolongarse por el tiempo estrictamente indispensable para evitar dichas incidencias, siniestros o riesgos. Si tal fuere el caso, las horas en que se prolongue la jornada de trabajo, de conformidad con lo dispuesto en este párrafo, se retribuirán con una cantidad igual a la que corresponda a cada una de las horas de la jornada regular, sin que sean consideradas como horas extras, en términos de los artículos 65 y 67 de la Ley Federal del Trabajo.</p>
        </li>
        <li>
            <b>DÍAS DE DESCANSO.-</b>
            <p>Ambas partes acuerdan que, semanalmente, el <b>TRABAJADOR</b> disfrutará de un día de descanso, con goce de salario íntegro. El día de descanso será, preferentemente, el domingo, sin embargo, el <b>PATRÓN</b> podrá variar dicho día de descanso según lo requieran sus necesidades, mediante una notificación o comunicado por cualquier medio efectivo de comunicación, incluidos los electrónicos.</p>
        </li>
        <li>
            <b>VACACIONES.-</b>
            <p>El <b>TRABAJADOR</b>,tendrá derecho a un plazo anual de vacaciones equivalente a  SEIS días laborales, el cual se incrementará por cada año de servicio, en los términos y según lo establecido por la legislación laboral vigente. En virtud de lo anterior, el <b>PATRÓN</b> se obliga a entregar al <b>TRABAJADOR</b>, anualmente, una constancia que contenga su antigüedad, el período de vacaciones que le corresponda y la fecha en que deberá disfrutarlas. </p>
        </li>
        <li>
            <b>CAPACITACIÓN Y ADIESTRAMIENTO.-</b>
            <p>El <b>PATRÓN</b> se obliga a brindar el <b>TRABAJADOR</b> la capacitación y el adiestramiento necesario con el objetivo de actualizar y perfeccionar los conocimientos y habilidades de este. En consecuencia, el <b>TRABAJADOR </b>se obliga a: </p>
            <ol type="I">
                <li>Asistir puntualmente a los cursos, sesiones de grupo y demás actividades que formen parte del proceso de capacitación o adiestramiento; </li>
                <li>Atender las indicaciones de las personas que impartan la capacitación o adiestramiento, cumpliendo con los programas respectivos, y;</li>
                <li>Presentar los exámenes de evaluación de conocimientos y de aptitud o de competencia laboral que le sean requeridos.</li>
            </ol>
        </li>
        <li>
            <b>SUSPENSIÓN TEMPORAL DE LA RELACIÓN LABORAL</b>
            <p>Ambas partes, acuerdan que podrá suspenderse temporalmente la relación laboral, sin responsabilidad para ninguna de ellas y sin obligación para el <b>TRABAJADOR</b> de prestar los servicios acordados ni para el <b>PATRÓN</b> de pagar el salario pactado, en los casos establecidos en el artículo 42 de la Ley Federal del Trabajo.
            </p>
        </li>
        <li>
            <b>RESCISIÓN DE LA RELACIÓN LABORAL.</b>
            <p> Las partes acuerdan que serán causas de rescisión de la relación laboral, sin responsabilidad para el <b>PATRÓN</b>, las señaladas en el artículo 47 de la Ley Sin perjuicio de lo anterior, en los casos de siniestro o riesgo inminente en que peligre la vida del <b>TRABAJADOR</b>, de sus compañeros, o la existencia misma del <b>PATRÓN</b> , la jornada de trabajo podrá prolongarse por el tiempo estrictamente indispensable para evitar dichas incidencias, siniestros o riesgos. Si tal fuere el caso, las horas en que se prolongue la jornada de trabajo, de conformidad con lo dispuesto en este párrafo, se retribuirán con una cantidad igual a la que corresponda a cada una de las horas de la jornada regular, sin que sean consideradas como horas extras, en términos de los artículos 65 y 67 de la Ley Federal del Trabajo. 
            </p>
            <p>De igual forma, y en términos de la fracción XV del artículo 47 de la Ley Federal del Trabajo, se entenderán por causas análogas a las establecidas en las fracciones del artículo 47 de la Ley Federal del Trabajo, y de igual manera graves y de consecuencias semejantes en lo que al trabajo se refiere, las siguientes:
                <ol type="I">
                    <li>Incumplir, en cualquier forma, el reglamento interior de trabajo, así como cualquier otra política vinculante del <b>PATRÓN</b>, incluyendo pero sin limitar, las políticas de prevención de lavado de dinero, políticas de privacidad y cualquier otra política de cumplimiento regulatorio;</li>
                    <li>Cometer cualquier conducta ilícita o delictiva en contra del <b>PATRÓN</b> o cualquiera de sus socios, accionistas, administradores, gerentes, factores, dependientes, comisionistas, socios comerciales, asesores, clientes, usuarios, empleados o prestadores de servicios;</li>
                    <li>Causar cualquier tipo de daño, ya sea moral o patrimonial al <b>PATRÓN</b> o cualquiera de sus socios, accionistas, administradores, gerentes, factores, dependientes, comisionistas, socios comerciales, asesores, clientes, usuarios, empleados o prestadores de servicios;</li>
                    <li>Abstenerse de prestar los servicios personales subordinados, materia del presente contrato, de forma diligente, profesional y en beneficio del <b>PATRÓN</b>, a juicio de este último;</li>
                    <li>Incumplir con la jornada de trabajo establecida en el presente contrato;</li>
                    <li>Revelar, sin autorización del <b>PATRÓN</b> cualquier <b>OBRA PROTEGIDA, CREACIÓN NUEVA o SECRETO INDUSTRIAL</b> propiedad del <b>PATRÓN</b> o de terceros;</li>
                    <li>Poner en riesgo, de cualquier tipo, al <b>PATRÓN</b> o cualquiera de sus socios, accionistas, administradores, gerentes, factores, dependientes, comisionistas, socios comerciales, asesores, clientes, usuarios, empleados o prestadores de servicios;</li>
                    <li>Causar cualquier daño a cualquiera de los materiales de trabajo, en específico los equipos de cómputo, que el <b>PATRÓN</b> le haya proporcionado para realizar su trabajo o que se encuentren dentro del centro de trabajo. Se considera que se ha dañado un equipo de cómputo cuando el mismo no pueda funcionar, o si externamente está golpeado, incinerado, roto, o manifiesta cualquier signo externo de descompostura o daño, o si internamente ha sido infectado con cualquier clase de programas que afecten su funcionamiento como pueden ser el caso de virus, “troyanos”, “spyware”, o cualquier otro de naturaleza similar o análoga; </li>
                    <li>Descompilar o intentar descompilar, sin autorización del <b>PATRÓN</b>, cualquiera de los programas de cómputo, software, aplicativos electrónicos, plataformas tecnológicas, propiedad del <b>PATRÓN</b> o de terceros, y;</li>
                    <li>Aplicar cualquier tipo de técnica de ingeniería inversa, para poder descifrar cualquier código fuente de cualquier programa de cómputo, software, aplicativo electrónico, plataforma tecnológica, propiedad del <b>PATRÓN</b> o de terceros, sin la autorización del<b>PATRÓN</b>.</li>
                </ol>
            </p>
        </li>

        <li>
            <b>DERECHOS DE AUTOR.</b>
            <p>Las partes acuerdan que todas las <b>OBRAS PROTEGIDAS</b> creadas, desarrolladas o realizadas por el <b>TRABAJADOR</b>, en cumplimiento de las obligaciones que asume por virtud del presente contrato, son comisionadas por el <b>PATRÓN</b> en términos de los artículos 83 de la Ley Federal del Derecho de Autor o la disposición normativa que en futuro haga sus veces, sin que resulte aplicable lo establecido en el artículo 84 de dicha ley. En consecuencia, corresponderán al <b>PATRÓN</b> todos los derechos patrimoniales, así como las facultades relativas a la divulgación, integridad y compilación de todas las OBRAS PROTEGIDAS que el <b>TRABAJADOR</b> desarrolle, cree o realice, en ejecución de los servicios establecidos en el presente contrato. 
                Así mismo, las partes aceptan y reconocen que cualquier <b>OBRA PROTEGIDA</b>, relacionada directa e indirectamente con el objeto social, modelo de negocios y actividad comercial, presente y futura del <b>PATRÓN</b>, que haya sido creada, desarrollada o realizada por el <b>TRABAJADOR</b> con anterioridad a la celebración del presente contrato, fue igualmente comisionada o realizada en colaboración remunerada por el <b>PATRÓN</b> en términos de los artículos 83 de la Ley Federal del Derecho de Autor. En consecuencia, las partes acuerdan que todos los derechos patrimoniales, así como las facultades relativas a la divulgación, integridad y compilación de las <b>OBRAS PROTEGIDAS</b>,  a que se hace referencia en el presente párrafo, corresponden a la <b>PATRÓN</b>.</p>
        </li>
        <li>
            <b>PROPIEDAD INDUSTRIAL.</b>
            <p>La propiedad industrial sobre las <b>CREACIONES NUEVAS</b> que el <b>TRABAJADOR</b> desarrolle, realice o reduzca a práctica, en ejecución de las obligaciones que asume por virtud del presente contrato se sujetan a lo establecido en el artículo 163 de la Ley Federal del Trabajo. En la medida permitida por la legislación aplicable y vigente, el <b>TRABAJADOR</b>  se obliga a asegurarse de que el <b>PATRÓN</b> tenga derecho a ser titular de cualquiera de las<b>CREACIONES NUEVAS</b>a que se hace referencia en esta cláusula. En caso de que el<b>TRABAJADOR</b>  desarrolle cualquiera de las <b>CREACIONES NUEVAS</b> a que se hace referencia en esta cláusula, se obliga a notificarlo, inmediatamente, al <b>PATRÓN</b> y a su supervisor directo. 
            De igual forma, con fundamento en el artículo 137 de la Ley Federal de Protección a la Propiedad Industrial, el<b>TRABAJADOR</b>   transmite a el <b>PATRÓN</b>, por virtud de este acto, todos y cada uno de los derechos que confieren las patentes y registros por los proyectos que le sean encomendados por el <b>PATRÓN</b>, así como todos y cada uno de los derechos que confieren las patentes y registros enlistados en el documento que se agrega como ANEXO B al presente contrato.</p>
        </li>
        <li>
            <b>SECRETOS INDUSTRIALES</b>
            <p>El <b>TRABAJADOR</b> podrá utilizar cualquiera de los <b>SECRETOS INDUSTRIALES </b>del <b>PATRÓN</b> a los que tenga acceso por virtud del presente contrato. En consecuencia, el <b>TRABAJADOR</b> se obliga a guardar la absoluta reserva; entera confidencialidad y secrecía y a la no divulgación de la <b>INFORMACIÓN CONFIDENCIAL</b>, incluyendo, pero sin limitar, los <b>SECRETOS INDUSTRIALES </b>, a la que tenga acceso por virtud del presente contrato. En consecuencia, el <b>TRABAJADOR</b>deberá abstenerse de revelar dicha <b>INFORMACIÓN CONFIDENCIAL</b>, incluyendo los <b>SECRETOS INDUSTRIALES </b>, a terceras personas sin autorización del <b>PATRÓN</b>. </p>
        </li>
        <li>
            <b>DOCUMENTOS.</b>
            <p>El <b>TRABAJADOR</b> se obliga a celebrar y firmar todos los documentos necesarios para efectos de poder formalizar o cumplir con todos los requisitos para llevar a cabo todas y cada una de las cesiones de derechos y licencias a que se hacen referencia en las cláusulas <b>DECIMA TERCERA, DECIMA CUARTA y DÉCIMA SÉPTIMA</b> del presente contrato, incluyendo, pero sin limitar, la celebración de contratos específicos de cesión de derechos o cartas de colaboración remunerada que sean necesarias, así como la firma de cualquier solicitud de registro ante el Instituto Mexicano de la Propiedad Industrial (en adelante IMPI), el Instituto Nacional del Derecho de Autor  (en adelante INDAUTOR), o cualquier organismo o dependencia con facultades similares en cualquier otro país del extranjero.</p>
        </li>
        <li>
            <b>LICENCIAS.</b>
            <p>En caso de que no sea posible llevar a cabo cualquiera de las cesiones de derechos a que se hace referencia en las cláusulas <b>DÉCIMA TERCERA y DÉCIMA CUARTA</b>  del presente contrato, el<b>TRABAJADOR </b> otorga al <b>PATRÓN,</b> por medio de este acto, una licencia exclusiva, irrevocable, transferible y perpetua, sujeta a las limitaciones establecidas en las disposiciones legales que resulten aplicables dependiendo del caso concreto, sobre aquellos <b>ELEMENTOS DE PROPIEDAD INTELECTUAL</b>, que no pudieron ser transmitidos o cedidos en términos de las cláusulas <b>DÉCIMA TERCERA y DÉCIMA CUARTA</b> del presente contrato.</p>
        </li>
        <li>
            <b>AGUINALDO.</b>
            <p>El <b>TRABAJADOR</b> percibirá un aguinlado anual de <b>QUINCE</b> días de salario, determinado de manera proporcional al tiempo que haya laborado de conformidad con lo establecido en el artículo 87 de la Ley Federal del Trabajo.</p>
        </li>
        <li>
            <b>EXÁMENES MÉDICOS OBLIGATORIOS.</b>
            <p> El <b>TRABAJADOR</b> se obliga en términos de la fracción X del artículo 134 de la Ley Federal del Trabajo, a someterse a los reconocimientos y exámenes médicos que el <b>PATRÓN</b> le indique.
            </p>
        </li>
        <li>
            <b>REGLAMENTO INTERIOR DE TRABAJO.</b>
            <p>El <b>TRABAJADOR</b> se obliga a observar y respetar las normas y regulaciones del centro de trabajo, así como las disposiciones del reglamento interior de trabajo que rigen la operación del <b>PATRÓN</b>.</p>
        </li>
        <li>
            <b>DISPOSICIONES DEL CONTRATO.</b>
            <p>De conformidad con lo establecido en el artículo 31 de la Ley Federal del Trabajo, las partes acuerdan que las disposiciones establecidas en el presente contrato obligan a lo expresamente pactado en el mismo y a las consecuencias que sean conformes a las normas de trabajo, a la buena fe y a la equidad.</p>
        </li>
        <li>
            <b>TÍTULOS DE LAS CLÁUSULAS.</b>
            <p>Las partes acuerdan que los títulos de las cláusulas contenidos en el presente contrato existen exclusivamente para facilitar la lectura del mismo, por lo que para interpretar la voluntad de las partes se deberá de estar al contenido íntegro de cada cláusula, y a la redacción entera del clausulado del presente contrato, mismo que deberá interpretarse en su conjunto.</p>
        </li>
        <li>
            <b>JURISDICCIÓN Y COMPETENCIA.</b>
            <p>Las partes acuerdan que, para la interpretación y cumplimiento del presente contrato, serán aplicables a las leyes laborales vigentes en la República Mexicana y competentes para conocer de cualquier conflicto que pudiese suscitarse entre las partes, los tribunales y juntas de conciliación en materia laboral de la Ciudad de México o bien la autoridad que en el futuro haga sus veces, renunciando así a cualquier fuero o competencia que pudiere corresponderles en el futuro incluso por razón de su domicilio. 
            </p>
        </li>
     </ol>
     <p><b>LAS PARTES MANIFIESTAN, QUE LEÍDO Y ENTENDIDO EL PRESENTE CONTRATO, MANIFIESTAN SU CONFORMIDAD CON EL MISMO EL DÍA: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`} </b></p>
    </section>


    <section class="F">
        <b>HOJA DE FIRMAS DEL CONTRATO INDIVIUDAL DE TRABAJO, POR TIEMPO INDETERMINADO, CELEBRADO ENTRE: ${dsPersonaMoral} Y ${nombreTrabajador}</b>

        <article class="firmas">
            <p>_____________________</p>
            <b><p>EL PATRÓN</p></b>    
            

                <br />
                <br />
            
            <p>_______________________</p>
            <b><p>EL TRABAJADOR</p></b> 
            
        </article>
    </section>
</body>
</html>`
}