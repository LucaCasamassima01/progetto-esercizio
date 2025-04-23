import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')  
  async getCatFact(): Promise<string> {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      
      
      if (!response.ok) {
        throw new Error('Errore nella richiesta a catfact.ninja');
      }

    
      const data = await response.json();

      return data.fact;  
    } catch (error) {
      return 'Errore nel recupero del fatto';
    }
  }
}
