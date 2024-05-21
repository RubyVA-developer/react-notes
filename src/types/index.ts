interface INote {
  id: string
  title: string
  descr: string
  image: string
  tags?: Tag[]
}

interface Tag {
  text: string
  colorClass: string
}

export type { Tag, INote }
