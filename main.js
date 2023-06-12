const puppeteer = require('puppeteer');


(async () => {
    /* const browser = await puppeteer.launch({
        headless: "new" //Esto se coloca porque como ocupo chrome , antes el headless era un sistema aparte de chrome para las automatizaciones , con el nuevo se añadio a el mismo ambiente https://developer.chrome.com/articles/new-headless/
        }); */
    const browser = await puppeteer.launch({
        headless: false /* Esto se coloca porque como ocupo chrome headless que es para hacer correr el navegador en segundo plano, 
                                    antes el headless era un sistema aparte de chrome para las automatizaciones ,
                                    con el nuevo se añadio a el mismo ambiente https://developer.chrome.com/articles/new-headless/ 
                                    hay que añadir la propiedad 'new' - en false tu puedes ver que hace puppeteer
                                    */
    });
    const page = await browser.newPage(); //Abro una pagina
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'); //Seteo que n
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('D:/Programacion/PROYECTO html a pdf/certificado_pdf.html'); // Voy a la pagina
    const cambiosPag = await page.evaluate(() => {

        const datosBanco ={
            primaBrutaAnualUF:12.3,
            fechaInicio:"23-03-2023",
            fechaTermino:"23-03-2023"
        }

        const datosCliente = { 
        nombre: "Lucas Juan", 
        apellido: "Gutierrez Castro",
        rut:"10675402-9",
        fechaNacimiento: "10/10/1990",
        correo:"xasfd@gmail.com",
        comuna:"Conchali",
        telefono:45523123,
        domicilio:"Bogota 3724",
        ciudad:"Santiago",
        correo:"Lucas@gmail.com"
    }


        const tdNombre = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(2) > td")
        tdNombre.textContent = `NOMBRE: ${datosCliente.nombre} ${datosCliente.apellido}` 

        const tdRUT = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(3) > td:nth-child(1)")
        tdRUT.textContent = `RUT: ${datosCliente.rut}`

        const tdNacimiento = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(3) > td:nth-child(2)")
        tdNacimiento.textContent = `FECHA DE NACIMIENTO: ${datosCliente.fechaNacimiento}`

        const tdTelefono = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(4) > td:nth-child(1)")
        tdTelefono.textContent = `TELÉFONO: ${datosCliente.telefono}`

        const tdCorreo = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(4) > td:nth-child(2)")
        tdCorreo.textContent = `CORREO ELECTRONICO: ${datosCliente.correo}`

        const tdDomicilio = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(5) > td:nth-child(1)")
        tdDomicilio.textContent = `DOMICILIO: ${datosCliente.domicilio}`

        const tdComuna = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(5) > td:nth-child(2)")
        tdComuna.textContent = `COMUNA: ${datosCliente.comuna}`

        const tdCiudad = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(6) > td:nth-child(1)")
        tdCiudad.textContent = `CIUDAD: ${datosCliente.ciudad}`

        const tdPrimaBruta = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(6) > td:nth-child(2)")
        tdPrimaBruta.textContent = `PRIMA BRUTA ANUAL UF: ${datosBanco.primaBrutaAnualUF}`

        const tdInicioVigencia = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(7) > td:nth-child(1)")
        tdInicioVigencia.textContent = `FECHA INICIO VIGENCIA: ${datosBanco.fechaInicio}`

        const tdFinalVigencia = document.querySelector("body > table:nth-child(11) > tbody > tr:nth-child(7) > td:nth-child(2)")
        tdFinalVigencia.textContent = `FECHA TÉRMINO VIGENCIA: ${datosBanco.fechaTermino}`
    })
    await page.pdf({ path: 'miPrimerPDF.pdf', format: 'A4',printBackground:true }); // convierto en pdf la pagina
/*     await page.screenshot({ path: 'MyScreen.jpg', fullPage: true }) */ //SCREENSHOT


    await browser.close();
})();