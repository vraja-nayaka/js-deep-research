// prototipe, this, class, context, inheritance
// es5 classes realization

const Animal = function (options) {
    this.type = options.type
    this.name = options.name
    this.size = options.size
    // (1)
    // this.voice = console.log('I hear voice from', this.type, this.name)
}

Animal.prototype.voice = function () {
    console.log('I hear voice from', this.type, this.name)
}

const cat = new Animal({ type: 'cat', name: 'Yosic', size: 'sm' })
// const cat = { type: 'cat', name: 'Yosic', size: 'sm' } // no difference

// cat.voice() // able to voice

const Squirrel = function (options) {
    Animal.apply(this, arguments)
    this.location = options.location || 'wood'
}

// in order to be able to call the method voice()
Squirrel.prototype = Object.create(Animal.prototype)

Squirrel.prototype.constructor = Squirrel

const squirrel = new Squirrel({
    type: 'squirrel',
    name: 'Bonky',
    size: 'xs',
    location: 'National park'
})

// it's possible to override the method
// if we use (1) definition then it's impossible
Animal.prototype.voice = function () {
    console.log('This sound goes from', this.type, this.name)
}
// squirrel.voice() // 'This sound goes from: squirrel Bonky'

// use old and new methods at the same time
Squirrel.prototype.voice = function () {
    Animal.prototype.voice.apply(this, arguments)
    console.log(this.name, 'gnaws nuts...')
}
