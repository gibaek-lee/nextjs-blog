export default function handler(req, res) {
  const {
    query: { slug },
  } = req

  res.end(`Post Slug: ${slug.join(', ')}`)
}