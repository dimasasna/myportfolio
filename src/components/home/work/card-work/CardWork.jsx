import { FaGithub } from "react-icons/fa"
import { BsFileEarmarkSpreadsheet } from "react-icons/bs"

const CardWork = ({ 
    title, 
    status, 
    statusColor = "text-green-700", 
    desc, 
    tech = [], 
    category, 
    categoryColor = "text-blue-400 bg-blue-400/10 inset-ring inset-ring-blue-400/20",
    githubLink,
    docLink
}) => {
    return (
        <div className='w-full text-white border border-gray-500 shadow rounded-3xl p-5 
            hover:scale-105 transition duration-300 bg-[#1d1d1d]'>

            {/* Title + Status */}
            <div className="flex justify-between mb-3 border-b border-b-gray-500 pb-2">
                <span className="font-semibold">{title}</span>
                <span className={`text-sm italic opacity-80 ${statusColor}`}>
                    {status}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm opacity-80 pb-2">{desc}</p>

            {/* Tech Stack + Category */}
            <div className="flex justify-between mb-3">
                <div className="flex gap-2 flex-wrap">
                    {tech.map((item, idx) => (
                        <span 
                            key={idx}
                            className="inline-flex items-center rounded-md bg-gray-400/10 
                            px-2 py-1 text-xs font-medium text-gray-400 
                            inset-ring inset-ring-gray-400/20"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Category Badge */}
                <div>
                    <span 
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${categoryColor}`}
                    >
                        {category}
                    </span>
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-row gap-3 text-xl">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                )}
                {docLink && (
                    <a href={docLink} target="_blank" rel="noopener noreferrer">
                        <BsFileEarmarkSpreadsheet />
                    </a>
                )}
            </div>

        </div>
    )
}

export default CardWork
