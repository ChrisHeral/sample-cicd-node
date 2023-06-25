import { mockRequest, mockResponse } from 'jest-mock-req-res'
import IndexController from '../src/indexController'

describe('Verify hello world message', () => {
  it('Should return Hello World !', async () => {
    const req = mockRequest({ body: {} })
    const res = mockResponse()
    new IndexController().get(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ message: 'Hello World !' })
  })
})
