function executeCommands(commands: string[]): number[] {
  const CPU = {
    'V00': 0,
    'V01': 0,
    'V02': 0,
    'V03': 0,
    'V04': 0,
    'V05': 0,
    'V06': 0,
    'V07': 0,
  }

  const execute = {
    'MOV': (argument: string, i: number) => {
      const [Vxx, Vyy] = argument.split(",") 
      CPU[Vyy] = Vxx.startsWith('V') ? CPU[Vxx] : Number(Vxx)
      CPU[Vyy] = CPU[Vyy] & 255
      return i+1
    },
    'ADD': (argument: string, i: number) => {
      const [Vxx, Vyy] = argument.split(",")
      CPU[Vxx] = (CPU[Vxx] + CPU[Vyy]) & 255
      return i+1
    },
    'DEC': (Vxx: string, i: number) => {
      CPU[Vxx] = (CPU[Vxx] - 1) & 255
      return i+1
    },
    'INC': (Vxx: string, i: number) => {
      CPU[Vxx] = (CPU[Vxx] + 1) & 255
      return i+1
    },
    'JMP': (index: string, i: number) => {
      return CPU['V00']!==0 ? Number(index) : i+1  
    }
  }

  let i: number = 0
  while (i < commands.length) {
    const command = commands[i]
    const [func, argument] = command.split(" ")

    i = execute[func](argument, i)
  }

  return Object.values(CPU)
}
