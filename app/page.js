import FundBar from './components/FundBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Our Fundraising Progress
        </h1>
        <FundBar raised={99000} target={100000} />
      </div>
    </div>
  )
}
