import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import Login from './login'
import {BrowserRouter} from 'react-router-dom'


describe('testing login ui', () => { afterEach(()=>{
    console.log("clean up done......")
})
beforeEach(()=>{
    console.log("Initilization done")
})
    it('login page', async () => { 
render(<BrowserRouter><Login/></BrowserRouter>)
fireEvent.change(screen.getByTestId('userId'),{target:{value:'sable@gmail.com'}})
fireEvent.change(screen.getByTestId('password'),{target:{value:'1234'}})
fireEvent.click(screen.getByTestId('submitctrl'))
// expect(screen.getByTestId('msglbl').textContent).toBe("valid user")
await waitFor (()=>expect(screen.getByTestId('msglbl').textContent).toBe('valid user'))

fireEvent.change(screen.getByTestId('userId'),{target:{value:'admin'}})
fireEvent.change(screen.getByTestId('password'),{target:{value:'admin1234'}})
fireEvent.click(screen.getByTestId('submitctrl'))
// expect(screen.getByTestId('msglbl').textContent).toBe("invalid user")
await waitFor (()=>expect(screen.getByTestId('msglbl').textContent).toBe('Invalid Details'))

        
    });
    
    
});
