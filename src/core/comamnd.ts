export abstract class Command {
    name!: string;
    description!: string;
    aliases!: string[];

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getAliases(): string[] {
        return this.aliases;
    }
}