import { CommandManager } from './Managers/CommandManager'
import { TinyPassword } from './Commands/TinyPassword'
import { StrongPassword } from './Commands/StrongPassword'
import { UltraPassword } from './Commands/UltraPassword'
import { CodeigniterAppKey } from './Commands/CodeigniterAppKey'

const commandManager = new CommandManager()

commandManager.commands = {
    tinyPassword: new TinyPassword(),
    strongPassword: new StrongPassword(),
    ultraPassword: new UltraPassword(),
    codeigniterAppKey: new CodeigniterAppKey(),
}

export default commandManager