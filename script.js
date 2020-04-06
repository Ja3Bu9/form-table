function add(){
    let nom = document.getElementById('nom').value
    let prenom = document.getElementById('prenom').value
    let age = document.getElementById('age').value
    let profession = document.getElementById('profession').value
    if (nom == '' || prenom =='' || age =='' || profession=='') return;


    document.getElementById('nom').value = ''
    document.getElementById('prenom').value= ''
    document.getElementById('age').value= ''
    document.getElementById('profession').value= ''


    let result = document.getElementById('result')

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    tr.className = 'item'
    td1.className= 'column1'
    td2.className='column2'
    td3.className='column3'
    td4.className='column4'

    td1.innerHTML=nom
    td2.innerHTML = prenom
    td3.innerHTML = age
    td4.innerHTML = profession

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    result.appendChild(tr)

}