import { interval, observable, Observable, of } from "rxjs"
import { map, takeLast, throttle } from "rxjs/operators"

describe("playground", () => {
  it("should works", done => {
    const observable = new Observable(subscriber => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      setTimeout(() => {
        subscriber.next(4)
        subscriber.complete()
      }, 1000)
    })

    console.log("right before subscribe")

    observable
      .pipe(map(x => `modifiedValue ${x}`))
      .pipe(
        throttle(
          element => interval(1000),
          { leading: true, trailing: true }
        ),
      )
      .subscribe({
        next(x) { console.log(`got value ${x}`)},
        error(err) { console.error(`something wrong happened ${err}`)},
        complete() { console.log("completed"); done() }
      })

    console.log("just right after subscribe")
  })
})
