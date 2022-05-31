import { SubmitEmailUseCase } from "./submit-email-use-case"

const createEmailSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitEmailUseCase(
    {create: createEmailSpy},
    {sendMail: sendMailSpy}
)

describe('Submit email',()=>{
    it('should be able to submit an email',async ()=>{
        

        await expect(submitFeedback.execute({
            email: 'test@test.com',
            message: 'I am Lucal and i approve this message',
        })).resolves.not.toThrow();

        expect(createEmailSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit an email without an email',async ()=>{
        
        await expect(submitFeedback.execute({
            email: '',
            message: 'I am Lucal and i approve this message',
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without a message',async ()=>{
        

        await expect(submitFeedback.execute({
            email: 'test@test.com',
            message: '',
        })).rejects.toThrow();
    })
})

    