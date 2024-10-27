import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const Donate = () => {

  const pixData = '49609612000175'

  return (
    <section className='flex flex-col gap-5 mt-10'>
      <h1 className='text-4xl text-center'>Doe qualquer valor para ajudar os nossos bichinhos!</h1>
      <div className='flex flex-col lg:flex-row justify-evenly container gap-5 m-auto items-center lg:h-[70vh]'>
        <div className='flex flex-col gap-2 text-xl items-center bg-white p-3 border-2 border-primary shadow-lg rounded-md'>
          <h2 className='text-2xl font-bold'>Transferência Bancaria</h2>
          <p>Banco Cora SCD (403)</p>
          <p><span className='font-bold'>Agência</span>: 0001</p>
          <p><span className='font-bold'>Conta Corrente</span>: 3744169-9</p>
          <p><span className='font-bold'>CNPJ</span>: 49.609.612/0001-75</p>
          <p><span className='font-bold'>Razão Social</span>: Adote um Bichinho</p>
        </div>
        <div className='flex justify-center flex-col items-center gap-2 text-xl bg-white p-3 border-2 border-primary shadow-lg rounded-md'>
          <h2 className='text-2xl font-bold'>Doe com PIX</h2>
          <QRCodeCanvas value={pixData} size={200} />
          <p><span className='font-bold'>CNPJ</span>: 49.609.612/0001-75</p>
        </div>
        <div className='w-[330px] text-center text-2xl flex flex-col justify-between mb-10 mt-4 gap-4 bg-white p-5 border-2 border-primary shadow-lg rounded-md'>
        <h2 className='text-2xl font-bold'>Doe com PicPay</h2>
        <p className='hover:transition-all hover:scale-110'><a href="https://app.picpay.com/user/adoteumbichinhorj" target="_blank" className='bg-primary-dark p-2 rounded-lg'>Clique Aqui!</a></p>
      </div>
      </div>
      
    </section>
  )
}

export default Donate