const billsDOM = document.querySelector('.bills')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.bill-form')
const billInputDOM = document.querySelector('.bill-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load bills from /api/bills
const showbills = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { bills },
    } = await axios.get('/api/v1/bills')
    if (bills.length < 1) {
      billsDOM.innerHTML = '<h5 class="empty-list">No bills in your list</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allbills = bills
      .map((bill) => {
        const { completed, _id: billID, name } = bill
        return `<div class="single-bill ${completed && 'bill-completed'}">
<h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
<div class="bill-links">



<!-- edit link -->
<a href="bill.html?id=${billID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${billID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`
      })
      .join('')
    billsDOM.innerHTML = allbills
  } catch (error) {
    billsDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showbills()

// delete bill /api/bills/:id

billsDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/api/v1/bills/${id}`)
      showbills()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = billInputDOM.value

  try {
    await axios.post('/api/v1/bills', { name })
    showbills()
    billInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, bill added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})
