const billIDDOM = document.querySelector('.bill-edit-id')
const billNameDOM = document.querySelector('.bill-edit-name')
const billCompletedDOM = document.querySelector('.bill-edit-completed')
const editFormDOM = document.querySelector('.single-bill-form')
const editBtnDOM = document.querySelector('.bill-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showbill = async () => {
  try {
    const {
      data: { bill },
    } = await axios.get(`/api/v1/bills/${id}`)
    const { _id: billID, completed, name } = bill

    billIDDOM.textContent = billID
    billNameDOM.value = name
    tempName = name
    if (completed) {
      billCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showbill()

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  try {
    const billName = billNameDOM.value
    const billCompleted = billCompletedDOM.checked

    const {
      data: { bill },
    } = await axios.patch(`/api/v1/bills/${id}`, {
      name: billName,
      completed: billCompleted,
    })

    const { _id: billID, completed, name } = bill

    billIDDOM.textContent = billID
    billNameDOM.value = name
    tempName = name
    if (completed) {
      billCompletedDOM.checked = true
    }
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, edited bill`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    billNameDOM.value = tempName
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})
