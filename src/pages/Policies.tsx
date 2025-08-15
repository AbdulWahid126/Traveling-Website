import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, FileText, Cookie, Lock } from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-sand text-accent-foreground">
            Legal Information
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Policies & Terms
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your privacy and security are our top priorities. Please review our policies to understand how we protect your information and outline our terms of service.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow border-0 cursor-pointer">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-ocean mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground">How we protect your data</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow border-0 cursor-pointer">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-ocean mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Terms & Conditions</h3>
                <p className="text-sm text-muted-foreground">Service usage guidelines</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-shadow border-0 cursor-pointer">
              <CardContent className="p-0">
                <Cookie className="h-12 w-12 text-ocean mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Cookie Policy</h3>
                <p className="text-sm text-muted-foreground">Website usage tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-medium border-0 mb-12">
            <CardHeader>
              <CardTitle className="font-display text-3xl text-ocean flex items-center">
                <Shield className="mr-3 h-8 w-8" />
                Privacy Policy
              </CardTitle>
              <p className="text-muted-foreground">Last updated: January 15, 2024</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-3">Information We Collect</h3>
                <p className="text-muted-foreground mb-4">
                  At Wanderlust Travel, we collect information to provide you with exceptional travel services. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal identification information (name, email, phone number, address)</li>
                  <li>Travel preferences and booking information</li>
                  <li>Payment and billing information</li>
                  <li>Website usage data and cookies</li>
                  <li>Communication records and customer service interactions</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">How We Use Your Information</h3>
                <p className="text-muted-foreground mb-4">
                  We use your information exclusively to enhance your travel experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Processing bookings and managing your travel arrangements</li>
                  <li>Providing customer support and assistance</li>
                  <li>Sending important updates about your trips</li>
                  <li>Improving our services based on your feedback</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Data Protection</h3>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information. Your data is encrypted during transmission and stored on secure servers. We never sell your personal information to third parties and only share it with trusted partners necessary for your travel arrangements.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Your Rights</h3>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and review your personal data</li>
                  <li>Request corrections to your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <Card className="shadow-medium border-0 mb-12">
            <CardHeader>
              <CardTitle className="font-display text-3xl text-ocean flex items-center">
                <FileText className="mr-3 h-8 w-8" />
                Terms & Conditions
              </CardTitle>
              <p className="text-muted-foreground">Last updated: January 15, 2024</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-3">Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By using Wanderlust Travel's services, you agree to comply with these terms and conditions. These terms apply to all users of our website and services.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Booking and Payment</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>Payment must be made according to the schedule provided at booking</li>
                  <li>Prices are subject to change until full payment is received</li>
                  <li>Additional fees may apply for changes or cancellations</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Cancellation Policy</h3>
                <p className="text-muted-foreground mb-4">
                  Cancellation terms vary by destination and service provider:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>60+ days before departure: 10% cancellation fee</li>
                  <li>30-59 days before departure: 25% cancellation fee</li>
                  <li>15-29 days before departure: 50% cancellation fee</li>
                  <li>Less than 15 days: No refund (travel insurance recommended)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Travel Insurance</h3>
                <p className="text-muted-foreground">
                  We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances, medical emergencies, and trip cancellations.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  Wanderlust Travel acts as an agent for suppliers and is not liable for their acts or omissions. Our liability is limited to the cost of services provided, and we are not responsible for circumstances beyond our control.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Policy */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="font-display text-3xl text-ocean flex items-center">
                <Cookie className="mr-3 h-8 w-8" />
                Cookie Policy
              </CardTitle>
              <p className="text-muted-foreground">Last updated: January 15, 2024</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-3">What Are Cookies</h3>
                <p className="text-muted-foreground">
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-lg mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground">
                      Required for basic website functionality, including security features and form submissions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Performance Cookies</h4>
                    <p className="text-muted-foreground">
                      Help us understand how visitors interact with our website to improve performance and user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Functional Cookies</h4>
                    <p className="text-muted-foreground">
                      Remember your preferences and choices to provide personalized features.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Marketing Cookies</h4>
                    <p className="text-muted-foreground">
                      Used to deliver relevant advertisements and track campaign effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-xl mb-3">Managing Cookies</h3>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. You can also opt-out of marketing cookies while still enjoying essential site features.
                </p>
              </div>

              <Separator />

              <div className="bg-muted p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lock className="h-5 w-5 text-ocean mr-2" />
                  <h3 className="font-semibold text-lg">Contact Us</h3>
                </div>
                <p className="text-muted-foreground">
                  If you have questions about these policies or need to exercise your rights regarding your personal data, please contact us at privacy@wanderlusttravel.com or call +1 (555) 123-4567.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Policies;