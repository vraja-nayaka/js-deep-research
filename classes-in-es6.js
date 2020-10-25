class Animal {
    constructor(options) {
        this.type = options.type
        this.name = options.name
        this.size = options.size
    }

    voice() {
        console.log('I hear voice from', this.type, this.name)
    }
}

const cat = new Animal({ type: 'cat', name: 'Yosic', size: 'sm' })

class Squirrel extends Animal {
    constructor(options) {
        super(options)

        this.location = options.location || 'wood'
        this.type = 'squirrel'
    }

    voice() {
        super.voice()
        console.log(this.name, 'gnaws nuts...')
    }
}

const squirrel = new Squirrel({
    name: 'Bonky',
    size: 'xs',
    location: 'National park'
})

// Examples
Object.prototype.print = function() {
    console.log('I am object', this)
}

squirrel.print

Array.prototype.mapAndLog = function() {
    console.log('Array to map:', this)
    return this.map.apply(this, arguments)
}

// console.log([1, 2, 3, 4].mapAndLog(x => x ** 2))

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

// console.log('any string'.toTag('span'))
