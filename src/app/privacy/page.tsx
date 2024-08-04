import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
      </div>
      <main className="container mx-auto space-y-8 px-4 pb-16 sm:px-6 lg:px-8">
        <section>
          <p className="text-muted-foreground">
            Welcome to our platform. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our platform. Please read it
            carefully.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            1. Information We Collect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Personal Information
              </h3>
              <p className="text-muted-foreground">
                We may collect personal information such as your name, email
                address, and phone number when you create an account or contact
                us.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Usage Data
              </h3>
              <p className="text-muted-foreground">
                We collect information about your interactions with our
                platform, such as the pages you visit, the features you use, and
                the time you spend on our site.
              </p>
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="text-muted-foreground">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to personalize your
            experience on our platform.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            3. Information Sharing and Disclosure
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Third-Party Service Providers
              </h3>
              <p className="text-muted-foreground">
                We may share your information with third-party service providers
                who perform services on our behalf, such as payment processing
                and data analysis.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Legal Requirements
              </h3>
              <p className="text-muted-foreground">
                We may disclose your information if required to do so by law or
                in response to valid requests by public authorities.
              </p>
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            4. Security of Your Information
          </h2>
          <p className="text-muted-foreground">
            We use administrative, technical, and physical security measures to
            help protect your personal information. However, no security system
            is impenetrable, and we cannot guarantee the security of our systems
            100%.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            5. Your Privacy Rights
          </h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have certain rights regarding
            your personal information, such as the right to access, correct, or
            delete your data. Please contact us to exercise these rights.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            6. Children&apos;s Privacy
          </h2>
          <p className="text-muted-foreground">
            Our services are not directed to individuals under the age of 13,
            and we do not knowingly collect personal information from children
            under 13. If we become aware that we have collected such
            information, we will take steps to delete it.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our
            platform. You are advised to review this Privacy Policy periodically
            for any changes.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            8. Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at [Contact Details].
          </p>
        </section>
      </main>
    </div>
  );
}
