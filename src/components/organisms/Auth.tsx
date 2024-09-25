'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import H2 from '../atoms/H2'
import { AuthTypes } from '@/types/AuthTypes'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthTypes>()

	const onSubmit: SubmitHandler<AuthTypes> = data => {
		console.log(data)
	}

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white shadow-md rounded-lg px-8 py-6 max-w-xs md:max-w-sm lg:max-w-md w-full'
			>
				<H2 className='font-bold mb-4 lg:mb-5 text-center'>
					Войдите в свой аккаунт
				</H2>

				<div className='mb-3 md:mb-4 lg:mb-5'>
					<input
						type='text'
						placeholder='Имя пользователя'
						{...register('username', { required: true })}
						className={`block w-full p-1 sm:p-2 lg:p-3 border rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs md:text-sm lg:text-base ${
							errors.username ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{errors.username && (
						<span className='text-red-500 text-xs md:text-sm lg:text-base'>
							Это поле обязательно для заполнения
						</span>
					)}
				</div>

				<div className='mb-4 md:mb-5 lg:mb-6'>
					<input
						type='password'
						placeholder='Пароль'
						{...register('password', { required: true })}
						className={`block w-full p-1 sm:p-2 lg:p-3 border rounded-md sm:rounded-lg lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs md:text-sm ${
							errors.password ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{errors.password && (
						<span className='text-red-500 text-xs md:text-sm lg:text-base'>
							Это поле обязательно для заполнения
						</span>
					)}
				</div>

				<button
					className='w-full bg-blue-500 text-xs md:text-sm lg:text-base text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 md:py-3 '
				>
					Войти
				</button>
			</form>
		</div>
	)
}

export default Auth
