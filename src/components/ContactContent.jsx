import React from 'react'

const ContactContent = () => {
  return (
<div className="max-w-[85rem] px-4 xl:px-0 py-10 lg:pt-0 lg:pb-14 mx-auto">
 

  <div className="mt-12 max-w-lg mx-auto bg-base-300">
    <div className="flex flex-col p-4 sm:p-6 lg:p-8">
      <h2 className="mb-8 text-xl font-semibold text-foreground">
        Fill in the form
      </h2>

      <form>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-contacts-1" className="block mb-2 text-sm text-foreground font-medium">First Name</label>
              <input type="text" name="hs-firstname-contacts-1"  className="input w-full" />
            </div>

            <div>
              <label for="hs-lastname-contacts-1" className="block mb-2 text-sm text-foreground font-medium">Last Name</label>
              <input type="text" name="hs-lastname-contacts-1" className="input w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" className="block mb-2 text-sm text-foreground font-medium">Email</label>
              <input type="email" name="hs-email-contacts-1"  autocomplete="email" className="input w-full" />
            </div>

            <div>
              <label for="hs-phone-number-1" className="block mb-2 text-sm text-foreground font-medium">Phone Number</label>
              <input type="text" name="hs-phone-number-1" className="input w-full" />
            </div>
          </div>

          <div>
            <label for="hs-about-contacts-1" className="block mb-2 text-sm text-foreground font-medium">Details</label>
            <input id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="input w-full"></input>
          </div>
        </div>

        <div className="mt-6 grid">
          <button type="submit" className="btn w-full py-3 px-4 btn-primary">Send inquiry</button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-muted-foreground-1">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  </div>

</div>
  )
}

export default ContactContent