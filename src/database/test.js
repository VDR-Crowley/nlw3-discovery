const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat, 
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.5551084",
            "-46.3928731",
            "Lar dos meninos",
            "Presta assistencia as crianças de 6 a 15 anos do sexo feminino",
            "1158697845",
            "https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha fazer uma visita e fazer o dia dessas meninos mais feliz",
            "Horários de visitas das 13hr as 19hr",
            "1"
        );
    `)

    // consultar dados da tabla
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orphanage pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

})