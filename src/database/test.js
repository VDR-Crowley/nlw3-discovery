const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela

    await saveOrphanage(db, {
        lat: '-23.5551084',
        lng: '-46.3928731',
        name: 'Local de amor',
        about: 'Presta assistencia as crianças de 6 a 15 anos do sexo feminino',
        whatsapp: '4521365896',
        images: [
          'https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    
          'https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha fazer uma visita e fazer o dia dessas meninas mais feliz',
        opening_hours: 'Horários de visitas das 13hr as 19hr',
        open_on_weekends: '1'
    
      })
  
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orphanage pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
})