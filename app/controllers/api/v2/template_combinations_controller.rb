module Api
  module V2
    class TemplateCombinationsController < V2::BaseController
      include Foreman::Controller::Parameters::TemplateCombination

      before_action :find_optional_nested_object
      before_action :find_resource, :only => [:show, :update, :destroy]

      def_param_group :template_combination_identifiers do
        param :provisioning_template_id, String, :desc => N_("ID of config template")
        param :hostgroup_id, String, :desc => N_("ID of host group")
      end

      api :GET, "/provisioning_templates/:provisioning_template_id/template_combinations", N_("List template combination")
      api :GET, "/hostgroups/:hostgroup_id/template_combinations", N_("List template combination")
      param_group :template_combination_identifiers
      def index
        @template_combinations = nested_obj.template_combinations
        @total = @template_combinations.count
      end

      def_param_group :template_combination do
        param :template_combination, Hash, :required => true, :action_aware => true do
          param :hostgroup_id, :number, :allow_nil => true, :desc => N_("host group id")
        end
      end

      api :POST, "/provisioning_templates/:provisioning_template_id/template_combinations", N_("Add a template combination")
      api :POST, "/hostgroups/:hostgroup_id/template_combinations", N_("Add a template combination")
      param_group :template_combination_identifiers
      param_group :template_combination, :as => :create

      def create
        @template_combination = nested_obj.template_combinations.build(template_combination_params)
        process_response @template_combination.save
      end

      api :GET, "/template_combinations/:id", N_("Show template combination")
      api :GET, "/provisioning_templates/:provisioning_template_id/template_combinations/:id", N_("Show template combination")
      api :GET, "/hostgroups/:hostgroup_id/template_combinations/:id", N_("Show template combination")
      param_group :template_combination_identifiers
      param :id, :identifier, :required => true
      def show
      end

      api :PUT, "/provisioning_templates/:provisioning_template_id/template_combinations/:id", N_("Update template combination")
      api :PUT, "/hostgroups/:hostgroup_id/template_combinations/:id", N_("Update template combination")
      param :id, :identifier, :required => true
      param_group :template_combination_identifiers
      param_group :template_combination

      def update
        process_response @template_combination.update!(template_combination_params)
      end

      api :DELETE, "/template_combinations/:id", N_("Delete a template combination")
      param :id, :identifier, :required => true

      def destroy
        process_response @template_combination.destroy
      end

      private

      def allowed_nested_id
        %w(hostgroup_id provisioning_template_id)
      end
    end
  end
end
