import { INote } from '../../types'

const NoteBlock: React.FC<INote> = ({ tags, image, title, descr }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{descr}</p>
        {tags?.length && (
          <div className="flex flex-wrap mt-4">
            {tags.map((tag) => (
              <span
                className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${tag.colorClass}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NoteBlock
