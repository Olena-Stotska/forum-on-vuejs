const { Router } = require('express')

const router = Router()
const discussions =  []
let idCounter = discussions.length > 0 ? Math.max(...discussions.map(item => item.id)) + 1 : 1

// CRUD: Create Read Update Delete
// REST: POST GET PATCH/PUT DELETE

router.get('/discussions', (request, response) => {
  response.send({
    items: discussions
  })
})

router.get('/discussions/:id', (request, response) => {
  const discussionId = Number(request.params.id)
  const discussion = discussions.find(discussion => discussion.id === discussionId)

  if (!discussion) {
    return response.status(404).send({
      message: `discussion with ${discussionId} isn't found`
    })
  }

  response.send({ discussion })
})

router.post('/discussions', (request, response) => {
  const { title } = request.body.discussion

  if (typeof title !== 'string' || title.trim().length === 0) {
    return response.status(412).send({
      message: `"title" is a required field and should be a string`
    })
  }

  const discussion = { title, comments: [], id: idCounter++ }
  discussions.push(discussion)

  response.send({ discussion })
})

router.patch('/discussions/:id', (request, response) => {
  const discussionId = Number(request.params.id)
  const { title } = request.body.discussion || {}

  if (typeof title !== 'string' || title.trim().length === 0) {
    return response.status(412).send({
      message: `"title" is a required field and should be a string`
    })
  }

  const discussion = discussions.find(({ id }) => discussionId === id)
  discussion.title = title

  response.send({ discussion })
})

router.post('/discussions/:id/comments', (request, response) => {
  const { message } = request.body.comment

  if (typeof message !== 'string' || message.trim().length === 0) {
    return response.status(412).send({
      message: `"comments" is a required field`
    })
  }

  const discussionId = Number(request.params.id)
  const discussion = discussions.find(discussion => discussion.id === discussionId)

  if (!discussion) {
    return response.status(412).send({
      message: `discussion isn't found`
    })
  }

  const comment = { message, photo: getRandomColor() }
  const comments = discussion.comments.unshift(comment)

  response.send({ comment })
})

router.delete('/discussions/:id', (request, response) => {
  const discussionId = Number(request.params.id)
  const discussionIndex = discussions.findIndex(discussion => discussion.id === discussionId)

  if (discussionIndex === -1) {
    return response.status(404).send({
      message: `discussion with ${discussionId} isn't found`
    })
  }

  discussions.splice(discussionIndex, 1)

  response.status(204).send()
})

function getRandomColor() {
  return `rgb(${[
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ].join(',')})`
}

module.exports = router

